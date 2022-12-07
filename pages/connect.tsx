import type { NextPage } from 'next'


import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
import { SiDiscord, SiGmail, SiLeetcode } from "react-icons/si"


import Navbar from '../components/Navbar'

import { useRouter } from 'next/router'
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

const Connect: NextPage = () => {
    const router = useRouter()
    const [open, setopen] = useState<boolean>(false);






    return (
        <div className="flex flex-col text-slate-50  hidescroll items-center  bg-bgc1 overflow-hidden" onScroll={() => {
            console.log("please  i bget you");
        }}>
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
            <div className='hidescroll flex ' onScroll={() => {
                console.log(2);
            }}>

                <div className='hidescroll flex-col px-16  items-center flex w-screen' onScroll={() => {
                    console.log("please  i bgsdet you");
                }}>
                    <div className=' md:flex w-screen items-center mt-14 md:p-10 justify-between overflow-x-hidden md:h-screen '>
                        <div className='flex md:items-start items-center flex-col space-y-3 p-10 md:w-1/2 relative overflow-hidden'>

                            <div className='text-4xl flex sm:flex-col sm:space-x-0 space-x-3 sm:text-7xl font-extrabold'>
                                <div className='flex flex-wrap sm:space-x-6 space-x-3'>
                                    <div>Meet</div>
                                    <div className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>and</div>
                                </div>

                                <div className=''>Greet</div>
                            </div>
                            <h5 className="text-lg  font-normal text-slate-300 lg:w-3/5 text-violet  text-justify">Now you Can Schedule a Google Meet with Meet directly Or Reach Out To me Through Socials</h5>
                            <div className='justify-start space-x-5 md:w-4/5 flex'>
                                <BsGithub className=' hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-black  cursor-pointer text-violet-100' />
                                <BsLinkedin className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-900  cursor-pointer text-violet-100 hover:bg-white rounded-md' />
                                <SiGmail className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-red-400  cursor-pointer text-violet-100' />
                                <BsInstagram className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-insta  cursor-pointer text-violet-100 ' />
                                <BsTwitter className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-400  cursor-pointer text-violet-100' />
                                <BsYoutube onClick={() => { }} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-red-500  cursor-pointer text-violet-100' />
                                <SiLeetcode onClick={() => { }} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-yellow-300  cursor-pointer text-violet-100' />
                                <SiDiscord onClick={() => { }} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-violet-500  cursor-pointer text-violet-100' />
                            </div>
                        </div>
                        <div className='flex  justify-center items-center md:w-1/2 '>
                            <div className='w-3/4 z-20 rounded-2xl overflow-hidden'>
                                <InlineWidget url="https://calendly.com/jayendramadaram/30min" />
                            </div>
                            <img src="https://harshgoel.me/images/vectors/ellipse.svg" alt="Triangle 3d Vector" className="absolute  bottom-0 right-0 hidden w-1/4 -z-20 md:block "></img>
                        </div>

                    </div>

                </div>
            </div>
            <div className='w-screen flex justify-center h-32 items-center space-x-5 text-xl'>
                <hr className="w-16 sm:w-1/5 mr-1 border-slate-200" />
                <div className='flex items-center space-x-3'>
                    <div>Made with 💖 By</div>
                    <div className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> Jayendra Madaram</div>
                </div>
                <hr className="w-16 sm:w-1/5 mr-1 border-slate-200" />
            </div>
        </div >
    )
}

export default Connect


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