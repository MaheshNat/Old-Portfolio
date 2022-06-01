import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";

import WAVES from "vanta/dist/vanta.waves.min";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import ReactGa from "react-ga";

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
    window.addEventListener("resize", this.updateWindowDimensions);
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
    window.removeEventListener("resize", this.updateWindowDimensions);
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
              padding: "2em",
            }}
            className="bg-dark"
            ref={this.main}
          >
            <div className="row justify-content-center">
              <div style={{ marginBottom: "1em", marginRight: "1em" }}>
                <a
                  href="https://www.instagram.com/maheshnatamai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: "Home",
                      action: "Clicked Instagram icon.",
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>

              <div style={{ marginBottom: "1em", marginRight: "1em" }}>
                <a
                  href="https://github.com/MaheshNat"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: "Home",
                      action: "Clicked Github icon.",
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
              <div style={{ marginBottom: "1em", marginRight: "1em" }}>
                <a
                  href="https://www.linkedin.com/in/mahesh-natamai-b17683188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: "Home",
                      action: "Clicked LinkedIn icon.",
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              <div style={{ marginBottom: "1em", marginRight: "1em" }}>
                <a
                  href="mailto:maheshkumar.natamai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: "Home",
                      action: "Clicked Email icon.",
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
              <div style={{ marginBottom: "1em" }}>
                <a
                  href={`${process.env.REACT_APP_BASE_URL}/resume`}
                  onClick={(e) => {
                    ReactGa.event({
                      category: "Home",
                      action: "Clicked Resume icon.",
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
            <h4 className="text-center" style={{ marginBottom: "1em" }}>
              Freshman at <span className="text-success">Georgia Tech</span>{" "}
              majoring in Computer Science <br />
              Interested in{" "}
              <span className="text-success">software engineering</span>,{" "}
              <span className="text-success">machine learning</span>, and{" "}
              <span className="text-success">data science</span>
            </h4>
            <div className="row justify-content-center text-center">
              <button
                onClick={() => {
                  this.props.history.push("/projects");
                }}
                type="button"
                className="btn btn-outline-success btn-lg"
                style={{ marginRight: "2em" }}
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
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {this.state.height > 600 && (
                <h2 style={{ cursor: "pointer" }}>Read More</h2>
              )}
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                size="3x"
                style={{ cursor: "pointer" }}
              />
            </ScrollLink>
          </div>
        </div>
        <div
          id="about"
          className="bg-dark"
          style={{ paddingTop: 100, paddingBottom: 50 }}
        >
          <div className="container" id="aboutme">
            <h2 style={{ margin: 0, letterSpacing: 15, marginBottom: "1em" }}>
              ABOUT ME
            </h2>
            <p style={{ fontSize: 20, marginBottom: "1em" }}>
              I'm an incoming freshman at the Georgia Institute Of Technology.
              I'm interested in web development, machine learning, data science,
              app development, as well as robotics, and have been teaching
              myself these topics. I use my knowledge in these domains to put
              ideas into effect and make an impact, whether through hackathons,
              personal projects, or competitive programming,
            </p>
          </div>
        </div>

        <div
          id="about"
          className="bg-dark"
          style={{ paddingTop: 50, paddingBottom: 100 }}
        >
          <div className="container">
            <h2 style={{ margin: 0, letterSpacing: 15, marginBottom: "1em" }}>
              HACKATHONS/COMPETITIONS
            </h2>
            <p style={{ fontSize: 20 }}>
              I frequently attend hackathons and other competitions in order to
              put my software skills to use. I particularly enjoy coming up with
              an idea and building it from scratch with others. The time crunch
              of hackathons allows me to train the speed at which I am able to
              produce, and has helped me to work better under pressure.
            </p>
            <p style={{ fontSize: 20, marginBottom: "1em" }}>
              In the past, I have competed in the USACO (USA Computing Olympiad)
              and the annual UTD battle of the brains. I hope to continue
              competitive programming to allow me to practice my data
              structures/algorithms as well as my algorithmic problem solving
              ability.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
