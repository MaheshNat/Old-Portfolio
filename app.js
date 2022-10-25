const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const CronJob = require('cron').CronJob;
const Episode = require('./models/Episode');

const PORT = "3000";

const app = express();
const contactRouter = require('./routes/contact');
const projectsRouter = require('./routes/projects');
const updateResumeRouter = require('./routes/updateResume.js');

const sslRedirect = (environments = ['production'], status = 302) => {
  const currentEnv = process.env.NODE_ENV;
  const isCurrentEnv = environments.includes(currentEnv);
  return (req, res, next) => {
    if (isCurrentEnv) {
      req.headers['x-forwarded-proto'] !== 'https'
        ? res.redirect(status, 'https://' + req.hostname + req.originalUrl)
        : next();
    } else next();
  };
};

// Register middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('tiny'));
app.use(sslRedirect());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/contact', contactRouter);
app.use('/projects', projectsRouter);
app.use('/update-resume', updateResumeRouter);
app.use('/episodes', (req, res) => {
  Episode.find({}).then((episodes) => {
    res.json(episodes);
  });
});

app.use('/resume', (req, res) => {
  res.download('./assets/mahesh-natamai-resume.pdf');
});

app.use('/resume-file', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'assets', 'mahesh-natamai-resume.pdf'));
});

//Connect To Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
  console.log('mongoDB Connected');
});

//Schedule Cron Jobs
const resumeJob = new CronJob(
  process.env.RESUME_UPDATE_SCHEDULE,
  () => {
    console.log('starting resume cron job...');
    axios({
      method: 'get',
      url: process.env.RESUME_DOWNLOAD_LINK,
      responseType: 'stream',
    }).then((response) => {
      response.data.pipe(
        fs.createWriteStream('./assets/mahesh-natamai-resume.pdf')
      );
      console.log('Updated resume pdf.');
    });
  },
  null,
  true,
  process.env.TIME_ZONE,
  null,
  true
);
resumeJob.start();

app.listen(PORT);
