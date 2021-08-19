import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import "./../sections/skill.scss";
import Tilt from "react-tilt";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section
      class='ftco-section'
      id={"contact"}
      style={{ marginBottom: "00px" }}
    >
      <div class='container'>
        <div class='row justify-content-center'></div>
        <Tilt className='Tilt' options={{ max: 25 }}>
          {" "}
          <div className='Tilt-inner'>
            <div class='row justify-content-center'>
              <div class='col-md-12'>
                <div class='wrapper'>
                  <div class='row no-gutters'>
                    <div
                      class='
                col-lg-8 col-md-7
                order-md-last
                d-flex
                align-items-stretch
              '
                    >
                      <div class='contact-wrap w-100 p-md-5 p-4'>
                        <h3 class='mb-4'>Get in touch</h3>
                        <div id='form-message-warning' class='mb-4'></div>
                        <div id='form-message-success' class='mb-4'>
                          Your message was sent, thank you!
                        </div>
                        <form
                          method='POST'
                          id='contactForm'
                          name='contactForm'
                          class='contactForm'
                          action='https://formspree.io/f/mayalpyo'
                        >
                          <div class='row'>
                            <div class='col-md-6'>
                              <div class='form-group'>
                                <label class='label' for='name'>
                                  Full Name
                                </label>
                                <input
                                  type='text'
                                  class='form-control'
                                  name='name'
                                  id='name'
                                  placeholder='Name'
                                />
                              </div>
                            </div>
                            <div class='col-md-6'>
                              <div class='form-group'>
                                <label class='label' for='email'>
                                  Email Address
                                </label>
                                <input
                                  type='email'
                                  class='form-control'
                                  name='email'
                                  id='email'
                                  placeholder='Email'
                                />
                              </div>
                            </div>
                            <div class='col-md-12'>
                              <div class='form-group'>
                                <label class='label' for='subject'>
                                  Subject
                                </label>
                                <input
                                  type='text'
                                  class='form-control'
                                  name='subject'
                                  id='subject'
                                  placeholder='Subject'
                                />
                              </div>
                            </div>
                            <div class='col-md-12'>
                              <div class='form-group'>
                                <label class='label' for='#'>
                                  Message
                                </label>
                                <textarea
                                  type='message'
                                  name='message'
                                  class='form-control'
                                  id='message'
                                  cols='30'
                                  rows='4'
                                  placeholder='Message'
                                ></textarea>
                              </div>
                            </div>
                            <div class='col-md-12'>
                              <div class='form-group'>
                                <input
                                  type='submit'
                                  value='Send Message'
                                  class='btn btn-primary'
                                />
                                <div class='submitting'></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class='col-lg-4 col-md-5 d-flex align-items-stretch'>
                      <div class='info-wrap bg-primary w-100 p-md-5 p-4'>
                        <h3>Let's get in touch</h3>
                        <p class='mb-4'>
                          We're open for any suggestion or just to have a chat
                        </p>
                        <div class='dbox w-100 d-flex align-items-start'>
                          <div
                            class='
                      icon
                      d-flex
                      align-items-center
                      justify-content-center
                    '
                          >
                            <span class='fa fa-map-marker'></span>
                          </div>
                          <div class='text pl-3'>
                            <p>
                              <span>Address:</span> Kepler , alpha centuri ,
                              milkyway , Laniakea
                            </p>
                          </div>
                        </div>
                        <div class='dbox w-100 d-flex align-items-center'>
                          <div
                            class='
                      icon
                      d-flex
                      align-items-center
                      justify-content-center
                    '
                          >
                            <span class='fa fa-phone'></span>
                          </div>
                          <div class='text pl-3'>
                            <p>
                              <span>Phone:</span>
                              <a href='tel://9100572305'>
                                {" "}
                                &nbsp;make a call "click here"
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class='dbox w-100 d-flex align-items-center'>
                          <div
                            class='
                      icon
                      d-flex
                      align-items-center
                      justify-content-center
                    '
                          >
                            <span class='fa fa-paper-plane'></span>
                          </div>
                          <div class='text pl-3'>
                            <p>
                              <span>Email:</span>
                              <a href='mailto:info@yoursite.com'>
                                click to write mail
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class='dbox w-100 d-flex align-items-center'>
                          <div
                            class='
                      icon
                      d-flex
                      align-items-center
                      justify-content-center
                    '
                          >
                            <span class='fa fa-globe'></span>
                          </div>
                          <div class='text pl-3'>
                            <p>
                              <span>website</span>
                              <a href='#'>&nbsp;yoursite.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
