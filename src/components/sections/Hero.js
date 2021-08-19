import React from "react";
import classNames from "classnames";

import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";

import "../../views/_home.scss";
import Typewriter from "typewriter-effect";

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom '
              data-reveal-delay='200'
            >
              JAYENDRA MADARA{" "}
              <div className='d-flex hiya'>
                I AM A &nbsp;
                <Typewriter
                  className='text-color-primary'
                  options={{
                    strings: [
                      "FULL STACK DEVELOPER",
                      "PYTHON PROGRAMMER",
                      "DEEP-L ENTHUSIAST",
                      "AND MARTIAL ARTIST",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                briefly i am 18 year old programmer at neil gogte institute of
                technology surf my portfolio or download my resume to know about
                me
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                <ButtonGroup>
                  <Button
                    tag='a'
                    color='info'
                    wideMobile
                    href='www.linkedin.com/in/jayendra-madharam-961922200'
                  >
                    DOWNLOAD RESUME
                  </Button>
                  <Button
                    tag='a'
                    color='dark'
                    wideMobile
                    href='https://github.com/jayendramadaram'
                    target='_blank'
                  >
                    View on Github
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className='hero-figure'>
            <Image
              className='has-shadow'
              src={require("../../feextjoaqkf41.png")}
              alt='jayendra madaram'
              width={896}
              height={504}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
