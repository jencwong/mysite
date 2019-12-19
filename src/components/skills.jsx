import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <section className="colorlib-skills" data-section="skills">
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
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Full Stack </h3>
                    <p>
                      Javascript, jQuery, React, HTML, CSS & UI libraries
                      (Bulma, Bootstrap, Material UI), Express on Node.js, Ruby
                      on Rails
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      SQL, Postgresl, Mongo DB (Mongoose), Excel, Statistical
                      Analysis (including regression and hypothesis testing)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Finance & Accounting</h3>
                    <p>
                      Balance Sheet, Income Statement, Cash Flow, Ratio
                      Analysis, Valuation, CAPM, WACC
                    </p>
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
