const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');

router.put('/', async (req, res) => {
  if (
    req.headers['secret'] &&
    req.headers['secret'] === process.env.UPDATE_RESUME_SECRET
  ) {
    const sha = (
      await axios.get(
        'https://api.github.com/repos/chubbyFreak/dummy-resume/contents/resume.pdf',
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_ACCESS_TOKEN}`,
            Accept: 'application/vnd.github+json',
          },
        }
      )
    ).data.sha;

    axios
      .put(
        'https://api.github.com/repos/chubbyFreak/dummy-resume/contents/resume.pdf',
        {
          message: 'automated update',
          content: req.body.content,
          sha: sha,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_ACCESS_TOKEN}`,
            Accept: 'application/vnd.github+json',
          },
        }
      )
      .then(async () => {
        const response = await axios({
          method: 'get',
          url: process.env.RESUME_DOWNLOAD_LINK,
          responseType: 'stream',
        });
        response.data.pipe(
          fs.createWriteStream('./assets/mahesh-natamai-resume.pdf')
        );
        console.log('Updated resume pdf via api.');
        return res.status(200).json({
          message: 'SUCCESS',
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          message: 'something went wrong...',
        });
      });
  } else {
    return res.status(400).json({
      message: 'INCORRECT SECRET',
    });
  }
});

module.exports = router;
