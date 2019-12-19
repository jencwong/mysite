import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Jennie Wong</a>
              </h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Portfolio
                    </a>
                  </li>

                  <li>
                    <a href="#contact" data-nav-section="contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <nav id="colorlib-main-menu">
              <ul></ul>
            </nav>
            <div className="colorlib-footer">
              <a
                className="footer-icons"
                href="https://www.linkedin.com/in/jennie-s-c-wong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-linkedin2" />
              </a>
              <a
                className="footer-icons"
                href="https://github.com/jencwong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github"></i>
              </a>
              <a
                className="footer-icons"
                href="https://twitter.com/Mominct2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-twitter2" />
              </a>

              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" />
                  <br></br>
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
