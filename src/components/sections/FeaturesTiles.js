import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { FaCode } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { SiCodeforces } from "react-icons/si";
import { GiGears, GiHighPunch } from "react-icons/gi";
import { FcSalesPerformance } from "react-icons/fc";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "my talents",
    paragraph: "THESE ARE MY FEW OF MANY TOP SKILLS.",
  };

  return (
    <section {...props} className={outerClasses} id={"talents"}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <FaCode size={66} className='p-3' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>FRONT-END</h4>
                  <p className='m-0 text-sm'>
                    I have been working with frontend in masive ammount lately.
                    i use REACT framework for my UI's in fact i made this
                    website with ReactJS
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <ImDatabase size={66} className='p-3' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>BACK-END</h4>
                  <p className='m-0 text-sm'>
                    AS part of full stack developer i have also learnt skill of
                    backend. i mostly use NodeJS , ExpressJS , Mysql and MongoDB
                    as major tools
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <SiCodeforces size={66} className='p-3' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8 '>COMPETITIVE PROGRAMMING</h4>
                  <p className='m-0 text-sm'>
                    Intially before dev life i was in CP, i am 5 star at
                    HACKERRANK and 3 star coder at CODECHEF
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <GiGears size={66} className='p-3' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>AUTOMATION</h4>
                  <p className='m-0 text-sm'>
                    And this is crazy part of my life , i love doing automation
                    ,basically i automate almost everything related to social
                    media in many platforms like linkedin , instagram , facebook
                    , youtube and email .I can take MARKETING to next level with
                    my automation and hacks
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <GiHighPunch size={66} className='p-3' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>MARTIAL ARTS</h4>
                  <p className='m-0 text-sm'>
                    Well apart from Technical life. i am a sportsperson too, i
                    have secured gold and broze medals in open/closed indian
                    national teakwondo championships. i do play games like
                    football , basket ball to peaks
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <FcSalesPerformance size={66} className='p-3' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>MARKETING</h4>
                  <p className='m-0 text-sm'>
                    LATELY i was also introduced to marketing i am passionate
                    about Digital marketing , Affiliate marketing , Content
                    creation , Lead generation , crypto and stocks and FBA etc.
                    i am just learning things and building up experience slowly
                    in future i will launch my strong carrier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
