import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Project = (props) => (
  <div className="card">
    <h4 className="card-header">{props.title}</h4>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">
        {props.languages.map((language) => (
          <span
            key={language}
            className="badge badge-info"
            style={{ marginRight: '1em' }}
          >
            {language}
          </span>
        ))}
      </h6>
      <p className="card-text">{props.description}</p>
      <h5 className="card-title">Links</h5>
      <hr />
      <div
        className="row justify-content-center text-center"
        style={{ marginBottom: '1em' }}
      >
        {props.demoLink && (
          <a href={props.demoLink} className="card-link col">
            <FontAwesomeIcon icon={faLink} size="2x" />
          </a>
        )}
        <a href={props.githubLink} className="card-link col">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        {props.devpostLink && (
          <a href={props.devpostLink} className="card-link col">
            <h6>Devpost</h6>
          </a>
        )}
      </div>
      <h5 className="cart-title">Creators</h5>
      <hr />
      <div className="row justify-content-center text-center">
        {props.creators.map((creator) => (
          <h6 key={creator} className="col-xs-6 col-sm-4">
            {creator}
          </h6>
        ))}
      </div>
    </div>
  </div>
);

export default Project;