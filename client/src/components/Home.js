import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import WAVES from 'vanta/dist/vanta.waves.min';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faFile,
  faNewspaper,
  faBrain,
  faGraduationCap,
  faLaptopCode,
  faMoneyCheckAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';

import ReactGa from 'react-ga';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.home = React.createRef();
    this.main = React.createRef();
  }

  componentDidMount() {
    ReactGa.pageview(window.location.pathname + window.location.search);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    WAVES({
      el: this.home.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.8,
      scaleMobile: 0.8,
      color: 0x886f,
      shininess: 30.0,
      waveHeight: 13.5,
      waveSpeed: 1.1,
      zoom: 0.8,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <div id="home" ref={this.home}>
          <div
            style={{
              marginTop:
                (this.state.height -
                  (70 +
                    101 +
                    (this.main.current !== null
                      ? this.main.current.clientHeight
                      : 0))) /
                2,
              padding: '2em',
            }}
            className="bg-dark"
            ref={this.main}
          >
            <div className="row justify-content-center">
              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="https://www.instagram.com/maheshnatamai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Home',
                      action: 'Clicked Instagram icon.',
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>

              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="https://github.com/MaheshNat"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Home',
                      action: 'Clicked Github icon.',
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="https://www.linkedin.com/in/mahesh-natamai-b17683188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Home',
                      action: 'Clicked LinkedIn icon.',
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="mailto:maheshkumar.natamai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Home',
                      action: 'Clicked Email icon.',
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
              <div style={{ marginBottom: '1em' }}>
                <a
                  href={`${process.env.REACT_APP_BASE_URL}/resume`}
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Home',
                      action: 'Clicked Resume icon.',
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faFile} size="2x" />
                </a>
              </div>
            </div>
            <h1 className="text-center" style={{ letterSpacing: 15 }}>
              MAHESH NATAMAI
            </h1>
            <h4 className="text-center" style={{ marginBottom: '1em' }}>
              High school junior self-learning{' '}
              <span className="text-success">software engineering</span>,{' '}
              <span className="text-success">machine learning</span>,{' '}
              <span className="text-success">robotics</span>, and{' '}
              <span className="text-success">data science</span>, with an
              affinity for <span className="text-success">finance</span> and{' '}
              <span className="text-success">investing</span>.
            </h4>
            <div className="row justify-content-center text-center">
              <button
                onClick={() => {
                  this.props.history.push('/projects');
                }}
                type="button"
                className="btn btn-outline-success btn-lg"
                style={{ marginRight: '2em' }}
              >
                Projects
              </button>
              <a
                href={`${process.env.REACT_APP_BASE_URL}/resume-file`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div
            style={{
              marginTop:
                (this.state.height -
                  (70 +
                    (this.state.height > 600 ? 101 : 0) +
                    (this.main.current !== null
                      ? this.main.current.clientHeight
                      : 0))) /
                2,
              marginBottom: 2,
            }}
            className="text-center"
          >
            <ScrollLink
              activeClass="active"
              to="adjectives"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {this.state.height > 600 && (
                <h2 style={{ cursor: 'pointer' }}>Read More</h2>
              )}
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                size="3x"
                style={{ cursor: 'pointer' }}
              />
            </ScrollLink>
          </div>
        </div>
        <div
          className="bg-secondary text-center"
          style={{ paddingTop: 50, paddingBottom: 50 }}
          id="adjectives"
        >
          <div className="container">
            <div className="row jusify-content-center">
              <div className="col-xs-4 col-md-3">
                <FontAwesomeIcon icon={faNewspaper} size="4x" />
                <br />
                <h4>Creator</h4>
              </div>
              <div className="col-xs-4 col-md-3">
                <FontAwesomeIcon icon={faBrain} size="4x" />
                <br />
                <h4>Lifelong Learner</h4>
              </div>
              <div className="col-xs-4 col-md-3">
                <FontAwesomeIcon icon={faGraduationCap} size="4x" />
                <br />
                <h4>Student</h4>
              </div>
              <div className="col-xs-4 col-md-3">
                <FontAwesomeIcon icon={faLaptopCode} size="4x" />
                <FontAwesomeIcon icon={faMoneyCheckAlt} size="4x" />
                <br />
                <h5>Computer Science & Finance Enthusiast</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          id="about"
          className="bg-dark"
          style={{ paddingTop: 100, paddingBottom: 100 }}
        >
          <div className="container">
            <h2 style={{ margin: 0, letterSpacing: 15, marginBottom: '1em' }}>
              ABOUT ME
            </h2>
            <p style={{ fontSize: 20, marginBottom: '1em' }}>
              I'm a current high school junior at the School Of Science And
              Engineering At Townview Magnet Center in Dallas, TX. I'm
              interested in web development, machine learning, data science, app
              development, as well as robotics, and have been teaching myself
              these topics. Additionally, I have an affinity for finance and
              investing, which I discuss with my friends on our podcast,{' '}
              <a
                href="https://linktr.ee/dalalstreetpodcast"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  ReactGa.event({
                    category: 'Home',
                    action: 'Clicked podcast linktree.',
                  });
                }}
              >
                The Dogs Of Dalal Street
              </a>
              , where we educate our viewers on different types of securities
              and financial topics like portfolio management, discuss the
              current state of the american economy, and more. I use my
              knowledge in these domains to put ideas into effect and make an
              impact, whether through hackathons, personal projects, or
              competitive programming,
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-lg-5 bg-secondary">
              <h2
                style={{
                  margin: 0,
                  letterSpacing: 15,
                  marginBottom: '1em',
                  paddingTop: 50,
                }}
              >
                ROBOTICS
              </h2>
              <p style={{ fontSize: 20, marginBottom: '1em' }}>
                I am part of the FTC Robotics team 6832 Iron Reign, and develop
                software using java for the annual competitions. The software I
                develop consists of autonomous systems, control systems, and
                primarily, computer vision systems using OpenCV. Our team's
                skills have allowed us to qualify for the world champsionship in
                Houston three years in a row, and teach our skills to younger
                individuals using various gadgets (3d printers, LEGO sumo
                robots, etc.) on our MXP (Mobile Tech Experience), a van
                repurposed to teach STEM to the community. You can check out
                more about our team on our website here:{' '}
                <a
                  href="https://ironreignrobotics.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Iron Reign Robotics Website
                </a>
                .
              </p>
            </div>
            <div className="col-xs-12 col-lg-7" style={{ padding: 0 }}>
              <Carousel interval={5000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="robotics/regionals_2020.jpeg"
                    alt="First slide: Regionals"
                  />
                  <Carousel.Caption>
                    <div className="carousel" z>
                      <h3>
                        FTC Robotics Wylie East Regional Championship 2020
                      </h3>
                      <p>
                        Qualified for the world champsionship at the Wylie East
                        Regional Championship in 2020 through 3rd place Inspire,
                        3rd place Think, 1st place Connect, and Control awards.
                      </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="robotics/deloitte.jpeg"
                    alt="Second slide: Deloitte"
                  />
                  <Carousel.Caption>
                    <div className="carousel">
                      <h3>Presenting To Deloitte</h3>
                      <p>
                        Presented to Deloitte LLC's Bot Development Team in
                        their Dallas branch office to introduce them to our
                        team, our robot, and FIRST.
                      </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-repsonsive"
                    src="robotics/dprg.jpg"
                    alt="Third slide: DPRG"
                  />
                  <Carousel.Caption>
                    <div className="carousel">
                      <h3>Presenting To The DPRG</h3>
                      <p>
                        We reached out to the Dallas Personal Robotics Group to
                        present. The DPRG are an organization in Dallas who have
                        monthly meetings for robotics projects In past seasons,
                        we've given them presentations about our seasonal
                        progress in build and code. This year, we wanted to
                        present again on computer vision, as this is something
                        that they were very interested in, but we also wanted to
                        give our actual presentation as practice for Regionals.
                      </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div
          id="about"
          className="bg-dark"
          style={{ paddingTop: 100, paddingBottom: 100 }}
        >
          <div className="container">
            <h2 style={{ margin: 0, letterSpacing: 4, marginBottom: '1em' }}>
              HACKATHONS/
              <br />
              COMPETITIONS
            </h2>
            <p style={{ fontSize: 20 }}>
              I frequently attend hackathons and other competitions in order to
              put my software skills to use. I particularly enjoy coming up with
              an idea and building it from scratch with others. The time crunch
              of hackathons allows me to train the speed at which I am able to
              produce, and has helped me to work better under pressure.
            </p>
            <p style={{ fontSize: 20, marginBottom: '1em' }}>
              I also compete in the USACO (USA Computing Olympiad), and am
              currently in the silver division. This programming competition
              along with others such as the annual UTD battle of the brains
              allow me to strengthen my data structures/algorithms skill and
              practice my algorithmic problem solving skills.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
