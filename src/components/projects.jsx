import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <section className="colorlib-projects" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Portfolio</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(images/snake_ladders_cover.png)"
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          href="https://snake_ladder_game.surge.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Snake & Ladder Addition Game
                        </a>
                      </h3>
                      <span>Game</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://snake_ladder_game.surge.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="icon_text">
                              Math Addition Game built with JavaScript, jQuery,
                              HTML, CSS, and various third-party APIs.
                            </p>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(https://i.imgur.com/3avQSsX.jpg)"
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          href="https://book-bag-app.herokuapp.com/home"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Bag App
                        </a>
                      </h3>
                      <span>Full Stack Web App</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://book-bag-app.herokuapp.com/home"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="icon_text">
                              An app for students to track reading list and for
                              teacher to administer classroom reading activity.
                              Built with EJS (front-end), bcrypt
                              (authentication), Mongoose, Express - Node.js
                              (back-end), using MVC framework.
                            </p>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(https://i.imgur.com/cMJl9bW.png)"
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="http://medicalendar-app.surge.sh/auth">
                          MediCal
                        </a>
                      </h3>
                      <span>Full Stack Web App</span>
                      <p className="icon">
                        <span>
                          <a
                            href="http://medicalendar-app.surge.sh/auth"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="icon_text">
                              An app for patients to schedule appointments and
                              for doctor to view appointments. Built with React
                              (front-end), JWT (authentication) and MongoDB,
                              Express - Node.js (back-end), using MVC framework.
                            </p>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(https://i.imgur.com/25gKmFc.png)"
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="#">Vacay Ai</a>
                      </h3>
                      <span>Full Stack App</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://vacay-ai.surge.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="icon_text">
                              An app for users to find dream vacation spots.
                              Built with React (front-end), and Progresql and
                              Ruby on Rails (back-end), using MVC framework.
                            </p>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(https://i.imgur.com/P3bMw85.png)"
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="http://bookmark-app-by-jj.surge.sh/">
                          Bookmark App
                        </a>
                      </h3>
                      <span>Full Stack App</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://bookmark-app-by-jj.surge.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="icon_text">
                              An app for users to add/edit/delete bookmarks.
                              Built with React (front-end), MongoDB and Express
                              - Node.js (back-end), using MVC framework.
                            </p>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
