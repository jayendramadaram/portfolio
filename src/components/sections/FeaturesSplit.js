import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import "./skill.scss";
import { BsCodeSlash } from "react-icons/bs";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "TOOLS I AM FAMILIAR WITH",
    paragraph:
      "THESE ARE TOOLS WHICH I AM FAMILIAR WITH AND WHICH I USE THE MOST AS PART OF MY TECH LIFE.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container-fluid p-0'>
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className='center-content p-0'
            id={"skills"}
          />
          <div class='skills my-3 py-3'>
            <div className='col-md-12 mb-5'>
              <div className='col-md-12 text-center mb-5'>
                <ul className='list-inline mx-auto skill-icon '>
                  <li className='list-inline-item mx-3'>
                    <i className='fab fa-react' style={{ fontSize: "220%" }} />
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='fb' style={{ fontSize: "220%" }}>
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            REACTJS
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className='list-inline-item mx-3'>
                    <i className='fab fa-python' style={{ fontSize: "220%" }} />
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='fb' style={{ fontSize: "220%" }}>
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            PYTHON
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className='list-inline-item mx-3'>
                    <i
                      className='devicon-mongodb-plain'
                      style={{ fontSize: "220%" }}
                    />
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='YO' style={{ fontSize: "220%" }}>
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            MONGODB
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className='list-inline-item mx-3'>
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='YO' style={{ fontSize: "220%" }}>
                          <BsCodeSlash className='mb-1 mx-3' />
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            HTML/SCSS
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className='list-inline-item mx-3'>
                    <i
                      className='devicon-mysql-plain'
                      style={{ fontSize: "220%" }}
                    />
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='YO' style={{ fontSize: "220%" }}>
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            MYSQL
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className='list-inline-item mx-3'>
                    <i
                      className='devicon-javascript-plain'
                      style={{ fontSize: "220%" }}
                    />
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='YO' style={{ fontSize: "220%" }}>
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            JAVA-SCRIPT
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className='list-inline-item mx-3'>
                    <i
                      className='devicon-php-plain'
                      style={{ fontSize: "220%" }}
                    />
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='YO' style={{ fontSize: "220%" }}>
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            PHP
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className='list-inline-item mx-3'>
                    <i
                      className='devicon-nodejs-plain'
                      style={{ fontSize: "220%" }}
                    />
                    <span>
                      <div className='text-center skills-tile'>
                        <i className='YO' style={{ fontSize: "220%" }}>
                          <p
                            className='text-center'
                            style={{ fontSize: "30%", margin: "0px" }}
                          >
                            NODEjs
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr height='10' />
          <div className='container' id={"projects"}>
            <div className={splitClasses}>
              <div className='split-item'>
                <div
                  className='split-item-content center-content-mobile reveal-from-left'
                  data-reveal-container='.split-item'
                >
                  <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                    full-stack project
                  </div>
                  <h3 className='mt-0 mb-12'>YOUTUBE CLONE</h3>
                  <p className='m-0'>
                    Youtube clone is one of many projects that i want to show on
                    top of my resume.i have used REACTjs , YouTube API , REDUX ,
                    BOOTSTRAP , FIREBASE , NODE and NPM
                    <br />
                    you can view site{" "}
                    <a
                      href='https://jayendramadara.000webhostapp.com/cmso/cmso.html'
                      className='text-info'
                    >
                      here{" "}
                    </a>
                    and source code in github
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container='.split-item'
                >
                  <Image
                    src={require("./../../Screenshot 2021-08-18 194059.jpg")}
                    alt='jayendra madara project 01'
                    width={528}
                    height={396}
                    style={{ borderRadius: "18px" }}
                  />
                </div>
              </div>

              <div className='split-item'>
                <div
                  className='split-item-content center-content-mobile reveal-from-right'
                  data-reveal-container='.split-item'
                >
                  <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                    manufacturing of bots
                  </div>
                  <h3 className='mt-0 mb-12'>Automation of social media</h3>
                  <p className='m-0'>
                    After working on several projects on automation i am in a
                    position to automate major social media sites like ,FB ,
                    TWITTER INSTAGRAM , LINKEDIN , YOUTUBE AND DISCORD. i can
                    automate features like replies , dm, posts , schedule ,
                    tweets , likes and followers.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container='.split-item'
                >
                  <Image
                    src={require("./../../download.png")}
                    alt='jayendra madara project  02'
                    width={528}
                    height={396}
                    style={{ borderRadius: "18px" }}
                  />
                </div>
              </div>

              <div className='split-item'>
                <div
                  className='split-item-content center-content-mobile reveal-from-left'
                  data-reveal-container='.split-item'
                >
                  <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                    Lightning fast workflow
                  </div>
                  <h3 className='mt-0 mb-12'>Web Scrapping</h3>
                  <p className='m-0'>
                    Lately this part of tech is pulling my intrest at huge
                    ammount.before web scrapping i used be as a web developer no
                    with that knowledge i can extract data from wed pages with
                    scroll/surf graphql , api's with lot of ease..You can view
                    all my projects in my{" "}
                    <a
                      href='https://github.com/jayendramadaram?tab=repositories'
                      className='text-info'
                    >
                      github
                    </a>
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container='.split-item'
                >
                  <Image
                    src={require("./../../webscr.png")}
                    alt='jayendra madara project  03'
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='zz'>
        <section
          class='page-section split-item-content center-content-mobile reveal-from-bottom hideme'
          id='team'
        >
          <div class='container'>
            <div class='text-center'>
              <h2 class='section-heading text-uppercase'>About</h2>
              <h3 class='section-subheading text-muted'>
                VISUALISATIION of my life progress and charecter development
                <br />
                THE TALE OF JAYENDRA MADARAM
              </h3>
            </div>
            {/* <FadeIn delay='300' transitionDuration='7000' wrapperTag='ul'> */}
            <ul class='timeline'>
              <li>
                <div class='timeline-image'>
                  <img
                    class='rounded-circle img-fluid imgset'
                    src={require("./../../first.jpg")}
                    alt='jayendra madara carrier'
                  />
                </div>
                <div class='timeline-panel'>
                  <div class='timeline-heading'>
                    <h4>2014-2017</h4>
                  </div>
                  <div class='timeline-body'>
                    <p class='text-muted'>
                      THIS period is when i was in high-school. it was
                      wonderfull i basically i dont know anything about tech but
                      ,. I was a huge space geek escpecially due to interstellar
                      i dont have much achievements but i was state gold medals
                      in olympaid exams
                    </p>
                  </div>
                </div>
              </li>
              <li class='timeline-inverted'>
                <div class='timeline-image'>
                  <img
                    class='rounded-circle img-fluid imgset'
                    src={require("./../../spc.jpg")}
                    alt='jayendra madara carrier'
                  />
                </div>
                <div class='timeline-panel'>
                  <div class='timeline-heading'>
                    <h4>2017 - 2018</h4>
                  </div>
                  <div class='timeline-body'>
                    <p class='text-muted'>
                      i was still a space geek as before . majorly i have made a
                      project on NSSC and submitted it to nasa luckily my
                      project named JEEVA passed first round but that luck
                      couldnt serve for more. but yeah this made me more space
                      geek. and i have won national bronze in taekwondo
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class='timeline-image'>
                  <img
                    class='rounded-circle img-fluid imgset'
                    src={require("./../../trd.jpg")}
                    alt='jayendra madara carrier'
                  />
                </div>
                <div class='timeline-panel'>
                  <div class='timeline-heading'>
                    <h4>2018 - 2020</h4>
                  </div>
                  <div class='timeline-body'>
                    <p class='text-muted'>
                      Honestly i dont wanna talk about these two year those
                      where drastic, though i was passed out with 9.8 gpa ,95%
                      in intermediate and 95 percentiale in JEE mains.i dont
                      feel like i am alive in that span. however this taught me
                      what i should be. but cool thing i won national gold in
                      MMA
                    </p>
                  </div>
                </div>
              </li>
              <li class='timeline-inverted'>
                <div class='timeline-image'>
                  <img
                    class='rounded-circle img-fluid imgset'
                    src={require("./../../frt.jpg")}
                    alt='jayendra madara carrier'
                  />
                </div>
                <div class='timeline-panel'>
                  <div class='timeline-heading'>
                    <h4>past 2021</h4>
                  </div>
                  <div class='timeline-body'>
                    <p class='text-muted'>
                      this is how my life gets intresting. i was introduced to
                      programming i learnt full/pull stack . i also started
                      exploring many parts of life , market , bussiness , tech
                      and how money actually works. lately i have launched a
                      tiny organisation called akatsuki with skilled people
                      around me. I wish for its success
                    </p>
                  </div>
                </div>
              </li>
              <li class='timeline-inverted'>
                <div class='timeline-image'>
                  <h4>
                    Be Part
                    <br />
                    Of MY
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
            {/* </FadeIn> */}
          </div>
        </section>
      </div>
      <section className=''>
        <div className='glass justify-content-center align-item-center'></div>
        <center>
          <h3 className='txt'>FOLLOW ME ON</h3>
        </center>
        <div className='d-flex justify-content-center filt justify-content-center align-items-center'>
          <ul className='d-flex ico justify-content-center align-items-center'>
            <center>
              <div className='row justify-content-center align-items-center'>
                <div className='col-md d-flex'>
                  <li>
                    <a href='https://www.facebook.com/madaram.jayendra/'>
                      <i
                        style={{ fontSize: "26px" }}
                        class='fab fa-facebook-square'
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/jayendramadaram'>
                      <i style={{ fontSize: "26px" }} class='fab fa-github'></i>
                    </a>
                  </li>
                  <li>
                    <a href='www.linkedin.com/in/jayendra-madharam-961922200'>
                      <i
                        style={{ fontSize: "26px" }}
                        class='fab fa-linkedin'
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/jayendra__02/'>
                      <i
                        style={{ fontSize: "26px" }}
                        class='fab fa-instagram'
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://discord.gg/9HyNdWsM'>
                      <i
                        style={{ fontSize: "26px" }}
                        class='fab fa-discord'
                      ></i>
                    </a>
                  </li>
                </div>
                <div className='col-md d-flex'>
                  <li>
                    <a href='https://www.tumblr.com/blog/view/dethacross'>
                      <i style={{ fontSize: "26px" }} class='fab fa-tumblr'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.codechef.com/users/jayendramadara'>
                      <i style={{ fontSize: "26px" }} class='fas fa-code'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/jayendra__02'>
                      {" "}
                      <i
                        style={{ fontSize: "26px" }}
                        class='fab fa-twitter'
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.reddit.com/user/jayendramadara'>
                      <i style={{ fontSize: "26px" }} class='fab fa-reddit'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/channel/UCU-GtEsT63xs4onwQLvmFPA'>
                      <i
                        style={{ fontSize: "26px" }}
                        class='fab fa-youtube'
                      ></i>
                    </a>
                  </li>
                </div>
              </div>
            </center>
          </ul>
        </div>
      </section>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
