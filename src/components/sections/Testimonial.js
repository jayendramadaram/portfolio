import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import "./skill.scss";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "MY NON TECH LIFE",
    paragraph:
      "If you are intrested to know about my life in a bit deeper you can explore this section!. i have mention about my INSpiration , future plans , my intrests and stuff",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div
                className='tiles-item-inner'
                transition-style='in:circle:bottom-left'
              >
                <h5>ANIME x SPACE</h5>
                <div
                  className='testimonial-item-content'
                  style={{ top: "-20px", position: "relative" }}
                >
                  <p className='text-sm mb-0'>
                    This is a brief article about why i like anime and why i am
                    so curious about space.i have included what i am planning to
                    do in this field and what can be done. i have also included
                    about my infuencer pages in the field so do explore it and
                    write me your thoughts about it <br />
                    .ARIGATO
                    <br />
                    <center>
                      <button class='btnn'>
                        <a
                          href='https://jayendramadara.000webhostapp.com/cmso/cmso.html'
                          target='_blank'
                        >
                          Read More
                        </a>
                      </button>
                    </center>
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    panther
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#'>jayendra madara</a>
                  </span>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <h5>LATEST SOCIAL MEDIA INTERACTIONS</h5>
                <div
                  className='testimonial-item-content'
                  style={{ top: "-20px", position: "relative" }}
                >
                  <p className='text-sm mb-0'>
                    WELL in this page you can encounter all my SM and my
                    influencer page posting all at one place.i using api/embeded
                    codes of insta,youtube,twitter,linkedin to make this page .
                    explore them on original platforms,leave a comment/review
                    about my posting
                    <center>
                      <button class='btnn'>
                        <a
                          href='https://jayendramadara.000webhostapp.com/cmso/cmso.html'
                          target='_blank'
                        >
                          Read More
                        </a>
                      </button>
                    </center>
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    panther
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>jayendra madara</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <h5>FUTURE PLANNING / INSPIRATION</h5>
                <div
                  className='testimonial-item-content'
                  style={{ top: "-20px", position: "relative" }}
                >
                  <p className='text-sm mb-0'>
                    Over here i have put all my future plan about startup and
                    stuff. your are welcome for any advice/suggetions regarding
                    my carrier and my plans . well if you wanna be part of my
                    journey write me a message i would be thankfull .YOU can
                    also find what excites me and what i am desperate about here
                    <center>
                      <button class='btnn'>
                        <a
                          href='https://jayendramadara.000webhostapp.com/cmso/cmso.html'
                          target='_blank'
                        >
                          Read More
                        </a>
                      </button>
                    </center>
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    panther
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>jayendra madara</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
