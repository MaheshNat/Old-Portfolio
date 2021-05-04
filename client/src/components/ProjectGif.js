import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import ReactGa from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  LazyLoadImage,
  LazyLoadComponent,
} from 'react-lazy-load-image-component';
import LoadingOverlay from 'react-loading-overlay';

const ProjectGif = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      {props.gifLink && (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => {
            props.onClick();
            ReactGa.event({
              category: 'Project',
              action: `Clicked on ${props.title} modal.`,
            });
          }}
          style={{ cursor: 'pointer' }}
        >
          <LoadingOverlay
            active={hover}
            text="Click To View Gif In Modal"
            fadeSpeed={200}
          >
            <LazyLoadImage
              className="img-responsive"
              style={{
                cursor: 'pointer',
                display: 'block',
                width: '100%',
                height: 'auto',
                marginBottom: '2em',
              }}
              src={props.gifLink}
              alt="No demo gif"
            />
          </LoadingOverlay>
        </div>
      )}

      {props.videoLink && (
        <LazyLoadComponent>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              allowFullScreen
              className="embed-responsive-item"
              frameBorder="0"
              title="video"
              src={props.videoLink}
            />
          </div>
        </LazyLoadComponent>
      )}

      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="row">
              <div className="col">{props.title}</div>
              {props.demoLink && (
                <a
                  href={props.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Project',
                      action: `Clicked on ${props.title} demo link (modal).`,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
              {props.githubLink && (
                <a
                  href={props.githubLink}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Project',
                      action: `Clicked on ${props.title} github link (modal).`,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              {props.devpostLink && (
                <a
                  href={props.devpostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Project',
                      action: `Clicked on ${props.title} devpost link (modal).`,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
                </a>
              )}
              {props.videoLink && (
                <a
                  href={
                    props.videoLink.substring(0, 23) +
                    '/watch?v=' +
                    props.videoLink.substring(30)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Project',
                      action: `Clicked on ${props.title} video link (modal).`,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
              )}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-center">
            <LazyLoadImage
              className="img-responsive col"
              src={props.gifLink}
              alt="No demo gif"
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectGif;
