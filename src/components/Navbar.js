import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //we have used props here
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      {" "}
      {/* // we have added `so that we can use templatelaterals */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="False"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto, mb-2, mb-lg-0, me-2 ">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
              {/* we have used "a"and "to" instead of "href" */}
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                {props.aboutText}
                Aboutin
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onclick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onclick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onclick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onclick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={() => {
                props.toggleMode("null");
              }}
              type="checkbox"
              ARIA
              role="switch"
              aria-checked="false"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}; // by using this we can set it to string bydefault and if we by mistake changed it into a int than it will give us an error
// we can add title: propsTypes.string.isRequired this so that we should miss this bydefault and to run the code  bugfree

// Navbar.defaultprops = {
//     title: "Set title here"
// } // by using this default props, if we don't set any title by mistake than this will be set as a default value
