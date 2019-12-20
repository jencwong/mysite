import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="portfolio">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Portfolio</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="Portfolio-centered">
                  <article
                    className="Portfolio-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="Portfolio-entry-inner">
                      <div className="Portfolio-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="Portfolio-label">
                        <h2>
                          <span></span>
                        </h2>
                        <p></p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="Portfolio-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="Portfolio-entry-inner">
                      <div className="Portfolio-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="Portfolio-label">
                        <h2>
                          <span></span>
                        </h2>
                        <p></p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="Portfolio-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="Portfolio-entry-inner">
                      <div className="Portfolio-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="Portfolio-label">
                        <h2>
                          <span></span>
                        </h2>
                        <p></p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="Portfolio-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="Portfolio-entry-inner">
                      <div className="Portfolio-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
