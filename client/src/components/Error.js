import React from "react";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container">
      <div
        className="jumbotron text-center"
        style={{ marginBottom: "2em", marginTop: "2em" }}
      >
        <h1>The page you were looking for was not found...</h1>
        <h2 style={{ marginBottom: "2em" }}>
          Maybe you meant to visit one of these pages:
        </h2>
        <div className="row justify-content-center text-center">
          <Link
            to="/projects"
            className="col-xs-12 col-md-2"
            style={{ marginBottom: "1em" }}
          >
            <button type="button" className="btn btn-outline-success btn-lg">
              Projects
            </button>
          </Link>
          <a
            href={`${process.env.REACT_APP_BASE_URL}/resume-file`}
            target="_blank"
            rel="noopener noreferrer"
            className="col-xs-12 col-md-2"
            style={{ marginBottom: "1em" }}
          >
            <button type="button" className="btn btn-outline-success btn-lg">
              Resume
            </button>
          </a>
          <Link
            to="/contact"
            className="col-xs-12 col-md-2"
            style={{ marginBottom: "1em" }}
          >
            <button type="button" className="btn btn-outline-success btn-lg">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
