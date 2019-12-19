import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">About Me</h2>
                      <p>
                        I am a full stack software developer with a background
                        in finance, investment and accounting. Two years ago, I
                        caught the coding bugs when I taught myself Python and C
                        languages while raising my two wonderful children. I
                        recently completed the General Assembly Software
                        Engineering Immersive Program.
                      </p>
                      <p>
                        I love solving problems and building applications. My
                        background in analyzing complex financial situations
                        taught me to be resourcefuld and innovative, while my
                        positive can-do attitude helps me persevere under
                        pressure. I am excited to begin this journey as a full
                        fledged programmer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites and chrome extentions
                      using JavaScript,React,HTML,CSS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      As coming from the CS background, I have good grasp over
                      fundamental concepts of DSA
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>
                      I am pursuing my internship with DevOps team at Juniper
                      and working with tools like Jenkins, Docker, K8s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}
