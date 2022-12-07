import type { NextPage } from 'next'


import { SiBitcoinsv, SiFreelancer, SiLinuxmint, SiMajorleaguehacking } from "react-icons/si"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import Navbar from '../components/Navbar'

import { useRouter } from 'next/router'
import React, { useState } from "react";
import { GiDetour } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';
import { SlChemistry } from 'react-icons/sl';
import { MdNotStarted } from 'react-icons/md';
import { AiFillDatabase, AiFillMedicineBox } from 'react-icons/ai';

const Education: NextPage = () => {
    const router = useRouter()
    const [open, setopen] = useState<boolean>(false);







    return (
        <div className="flex text-slate-50  hidescroll   bg-bgc1 overflow-hidden" onScroll={() => {
            console.log("please  i bget you");
        }}>
            <img src="https://harshgoel.me/images/vectors/ellipse.svg" alt="Triangle 3d Vector" className="fixed  bottom-0 right-0 hidden w-1/4 z-0 md:block "></img>
            <div className='fixed lg:top-1/3 top-1/4 hidden md:flex flex-col space-y-3 p-10 items-end  justify-end  overflow-hidden'>
                <div className='flex space-x-5 justify-end'>
                    <div>
                        <div className='flex items-center justify-end space-x-2'>
                            <div className='text-transparent text-lg font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Work And Experience</div>
                            <hr className="w-16 sm:w-24 mr-1 border-slate-200" />
                        </div>
                    </div>
                </div>
                <h5 className="text-lg w-2/5 font-normal text-slate-300  text-violet  text-right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Along the path i have been into many fields, currently I am completely Invested in decentralizing the ERA. I am enthusiastic about building talented AI machines. Currently, I am exploring the feild. I often practice martial arts to keep me disciplined and motivated indeed. Ahh i can talk about Space and COSMOS for dear Life.</h5>
                <div className=' animate-pulse flex'>
                    <div className=' text-3xl font-extrabold'>
                        <div className='flex lg:flex-row flex-col space-x-4'>
                            <h3>Be a part</h3>
                            <h3 className='text-pink-300'>of my</h3>
                            <h3>Journey.</h3>
                        </div>
                    </div></div>
            </div>
            <div className={`z-40 h-screen  left-0 fixed bg-black text-white ${open ? "w-screen " : "w-0 overflow-x-hidden"} transition-all`}>
                <div className={`text-5xl fixed top-0 right-4 ${open ? "" : "hidden"}`} onClick={() => setopen(false)}>
                    &times;
                </div>
                <div className='py-5 text-3xl text-slate-400 '>

                    <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-1" onClick={() => {
                        router.asPath == "/" ? () => {
                            setopen(false)
                            document.getElementById("explore")?.scrollIntoView()
                        } : router.push("/#explore")
                    }}>
                        <div className="px-5 py-3">
                            Explore
                        </div>
                    </div>
                    <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-1" onClick={() => router.push("/Education_n_Work")}>
                        <div className="px-5 py-3">
                            Work
                        </div>
                    </div>
                    <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-1" onClick={() => {
                        router.asPath == "/" ? document.getElementById("projects")?.scrollIntoView() : router.push("/#projects")
                    }}>
                        <div className="px-5 py-3">
                            Projects
                        </div>
                    </div>
                    <div onClick={() => router.push("/connect")} className="hover:text-white cursor-pointer transition-all hover:-translate-y-1">
                        <div className="px-5 py-3">
                            Contact
                        </div>
                    </div>
                </div>
            </div>
            <Navbar setOPEN={setopen} shrink={false} />
            <div className='hidescroll ' onScroll={() => {
                console.log(2);
            }}>

                <div className='hidescroll  w-screen' onScroll={() => {
                    console.log("please  i bgsdet you");
                }}>
                    <div className=' lg:flex md:w-3/5  mt-14 md:p-10 overflow-x-hidden  '>
                        <div className=' lg:top-1/3 top-1/4 md:hidden flex flex-col space-y-3 p-10 items-center  overflow-hidden'>
                            <div className='flex space-x-5 justify-center'>
                                <div>
                                    <div className='flex items-center justify-end space-x-2'>
                                        <div className='text-transparent text-lg font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Work And Experience</div>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-lg md:w-2/5 font-normal text-slate-300  text-violet w-4/5 text-center">Along the path i have been into many fields currently I am completely Invested in decentralizing the ERA. I am enthusiastic about building talented AI machines currently I am exploring the field. I often practice martial arts to keep me disciplined and motivated indeed. Ahh i can talk about Space and COSMOS for dear Life.</h5>
                            <div className=' animate-pulse flex'>
                                <div className=' text-3xl font-extrabold'>
                                    <div className='flex  space-x-4'>
                                        <h3>Be a part</h3>
                                        <h3 className='text-pink-300'>of my</h3>
                                        <h3>Journey.</h3>
                                    </div>
                                </div></div>
                        </div>
                        <div className=' '>
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #363e50' }}
                                    date="2014 - 2018"
                                    iconStyle={{ background: 'rgb(238,187,195)', color: '#363e50' }}
                                    icon={<MdNotStarted />}
                                >
                                    <h3 className=" text-xl vertical-timeline-element-title">High School</h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        Narayana e-Techno

                                    </h4>
                                    <p className='font-light text-lg'>
                                        Graduated my HighSchool with 9.8 CGPA. Been a space geek whole time and this era where i started my martial arts Journey
                                        Been into Nasa Space settlement contest working on Project <a className='underline italic cursor-pointer font-thin' href='https://drive.google.com/file/d/1mZuTISFvR9Rr-JEf0rotGqOEP5J_Kssp/view?usp=sharing'>Jeeva</a>
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    className="vertical-timeline-element--work"
                                    date="2018 - 2020"
                                    iconStyle={{ background: 'rgb(238,187,195)', color: '#363e50' }}
                                    icon={<SlChemistry />}
                                >
                                    <h3 className="vertical-timeline-element-title">Intermediate School</h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        Narayana Junior college
                                    </h4>
                                    <p>
                                        Spent years enhancing skills in calculus, algebra and other sciences. passed out with 95.5%
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    className="vertical-timeline-element--work"
                                    date="2021 - current"
                                    iconStyle={{ background: 'rgb(238,187,195)', color: '#363e50' }}
                                    icon={<IoMdSchool />}
                                >
                                    <h3 className="vertical-timeline-element-title">Under Gradudation</h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        Neil Gogte Institue of Technology
                                    </h4>
                                    <p>
                                        Currently persuing my  Bachelors in Technology and doing my best in building Optimized programming logic and masterring web3
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    className="vertical-timeline-element--work"
                                    date="JAN - March 21"
                                    iconStyle={{ background: 'rgb(238,187,195)', color: '#363e50' }}
                                    icon={<GiDetour />}
                                >
                                    <h3 className="vertical-timeline-element-title">Competitive Programming</h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        Codechef, Hackerrank,
                                    </h4>
                                    <p>
                                        Been a 3 Star python Programmer in codechef and 6 star coder in Hackerrank-python.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    className="vertical-timeline-element--education"
                                    date="May - Oct 21"
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={<SiFreelancer />}
                                ><h3 className="vertical-timeline-element-title">Freelancing</h3>
                                    <p>
                                        Been a freelance web developer and Automation engineer. worked with clients like  fashon studio and Dripin Organization
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    className="vertical-timeline-element--education"
                                    date="Oct 21 - Feb 22"
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={< AiFillDatabase />}
                                > <h3 className="vertical-timeline-element-title">Full stack and Data engineer</h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        British Dsire ecommerce
                                    </h4>
                                    <p>
                                        Helped the ecommerce startup setting up data flows and analysing/visualizing data. worked with graphql based ecomeerce shopify data designed shopify pulgins for enhancement.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    className="vertical-timeline-element--education"
                                    date="Feb - Nov 22"
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={<AiFillMedicineBox />}
                                >
                                    <h3 className="vertical-timeline-element-title">GenoParadigm</h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        Full stack engineer
                                    </h4>
                                    <p>
                                        Was part of platform development for a medtech startup initiated at NGIT. designed entire backend with microservice architecture followed by Ai processing
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                    date="Oct 22 - Dec 22"
                                    icon={<SiBitcoinsv />}
                                >
                                    <h3 className="vertical-timeline-element-title">Blockchain development</h3>

                                    <p>
                                        Spent enormous time and got deeply invsted into blockchain development and getting perfection in writing secure smart contracts in Solidity and Rust. Mentorring teams at NGIT working on blockchain projects.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#363e50', color: '#fff' }}
                                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                    icon={<SiMajorleaguehacking />}
                                >
                                    <h3 className="vertical-timeline-element-title">Hackathons</h3>

                                    <p>
                                        Was part of team finalized for Smart India Hackathon 22 finale. Secured 2nd position in Megathon22
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>

                        </div>


                    </div>

                </div>
            </div>

        </div >
    )
}

export default Education


/**
 * <div className='flex w-full' >
        <div className='h-full fixed flex flex-col-reverse space-y-4 items-center w-20'>
          <div className='h-full md:h-60 mt-2 w-1 rounded-t-full bg-violet-100'></div>
          <BsGithub className='w-8 h-8 cursor-pointer text-violet-100' />
          <BsLinkedin className='w-8 h-8 cursor-pointer text-violet-100' />
          <BsInstagram className='w-8 h-8 cursor-pointer text-violet-100' />
          <BsTwitter className='w-8 h-8 cursor-pointer text-violet-100' />
        </div>
        <div>

          hi there
        </div>
      </div>
 */