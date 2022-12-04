import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import ICON from "../assets/icon.png"
import { HeadMeta } from '../components'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
import { useEffect, useState, useRef } from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Typewriter from 'typewriter-effect';
import AVATAR from "../assets/avatar.png"
import Project1 from "../assets/yei-learn.png"
import { useHorizontalScroll } from '../hooks'



const Home: NextPage = () => {
  const scrollRef = useHorizontalScroll();
  const [scrolledEnd, setscrolledend] = useState<boolean>(false);
  const [canScroll, setcanScroll] = useState<boolean>(false);
  const [shrink, setshrink] = useState<boolean>(false);

  const myStateRef = useRef(canScroll);
  const myscrolled = useRef(canScroll);

  const isInViewport = () => {
    const rect = document.getElementById("isvisible")?.getBoundingClientRect();
    if (rect) {
      let value: boolean = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        !myscrolled.current
      )
      myStateRef.current = value
      setcanScroll(
        value
      );
    }
  }

  useEffect(() => {
    if (canScroll) {
      document.body.classList.add("stop-scrolling")
    } else {
      document.body.classList.remove("stop-scrolling")
    }
  }, [canScroll])


  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("scroll", () => {
        isInViewport()
      })
      window.addEventListener("wheel", (event) => onWheelScroll(event))
    }
  }, [])

  const onWheelScroll = (event: WheelEvent) => {
    let elem = document.getElementById("refer")?.getBoundingClientRect()
    if (elem) {
      setshrink(elem.top > window.innerHeight - elem.height - 30);
    }

    if (myStateRef.current && event.deltaY > 0) {
      document.getElementById("hirox")!.scrollLeft += 15;
    }
  }


  const logger = () => {
    console.log(canScroll);
    console.log(scrolledEnd);
    // document.getElementById("hirox")!.scrollLeft += 20;
  }

  return (
    <div className="flex text-slate-50   items-center  bg-bgc1 overflow-hidden" onScroll={() => {
      console.log("please  i bget you");
    }}>
      <Navbar shrink={shrink} />
      <div className=' flex' onScroll={() => {
        console.log(2);
      }}>
        <div className='h-screen flex fixed flex-col-reverse space-y-4 items-center w-20'>
          <div className='h-full md:h-40 mt-2 w-1 rounded-t-full bg-violet-100'></div>
          <BsGithub className=' hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-black w-8 h-8 cursor-pointer text-violet-100' />
          <BsLinkedin className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-900 w-8 h-8 cursor-pointer text-violet-100 hover:bg-white rounded-md' />
          <BsInstagram className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-insta w-8 h-8 cursor-pointer text-violet-100 ' />
          <BsTwitter className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-400 w-8 h-8 cursor-pointer text-violet-100' />
          <BsYoutube onClick={() => logger()} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-red-500 w-8 h-8 cursor-pointer text-violet-100' />
        </div>

        <div className=' flex-col px-16  items-center flex w-screen' onScroll={() => {
          console.log("please  i bgsdet you");
        }}>
          <div className=' lg:flex items-center mt-14 md:p-10 justify-between overflow-x-hidden h-screen '>
            <div className='flex flex-col space-y-3 p-10 w-1/2 relative overflow-hidden'>
              <div className='flex space-x-5'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <hr className="w-16 sm:w-24 mr-1 border-slate-200" />
                    <div className='text-transparent text-lg font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Who Am i ?</div>
                  </div>
                  <div className='flex space-x-6 items-baseline'>
                    <h1 className='font-sans text-5xl font-bold'>Jayendra Madara</h1>
                  </div>
                </div>
                <img src="https://harshgoel.me/images/vectors/triangle.svg" alt="Triangle 3d Vector" className=" hidden md:block  w-2/3 md:w-16 animate-spin-slow"></img>
              </div>
              <div className='flex text-2xl'>
                <div>&#60; I am a &nbsp;</div>
                <Typewriter
                  options={{
                    strings: ['BlockChain Developer', 'Machine Learning Enthusiast', 'Martial Artist', 'FullStack Engineer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <div>&nbsp;/&gt;</div>
              </div>
              <h5 className="text-lg  font-normal text-slate-300 w-4/5 text-violet  text-justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A fresher with experience", Trying to make world a better place with decentralized governence by Building scalable & secured BlockChain products </h5>
              <div className='justify-start space-x-5 px-5 w-2/5 flex'>
                <button className='px-7 py-3 border rounded-lg border-red-200 shadow-lg hover:shadow-gray-600  bg-red-200 hover:bg-transparent hover:text-white text-slate-900 transition ease-in-out delay-150 duration-300'>
                  Resume
                </button>
                <button className='px-7  py-3 border shadow-lg hover:shadow-gray-600 rounded-lg hover:bg-red-200 hover:text-slate-900 transition ease-in-out delay-150 duration-300 border-red-200'>
                  Github
                </button>
              </div>
            </div>
            <div className='flex  justify-center items-center w-1/2 '>
              <Image className=' bg-pink-50 rotate-12 z-20 rounded-3xl hover:rotate-0 transition-all cursor-pointer delay-75 duration-200' width={450} height={450} src={AVATAR} alt="Jayendra Madaram" />
              <div className='absolute about__me w-img h-img rounded-3xl z-10'></div>
              <img src="https://harshgoel.me/images/vectors/ellipse.svg" alt="Triangle 3d Vector" className="absolute  bottom-0 right-0 hidden w-1/4 z-0 md:block "></img>
            </div>
            <div className='absolute bottom-0 cursor-pointer right-1/2 animate-bounce' id='refer' onClick={() => window.scrollBy(0, window.innerHeight - 55)}>
              <div className="animate-bounce  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6  text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className='h-screen w-screen flex  justify-center items-center'>
            <div className=' rounded-2xl bg-gray-800 flex flex-col ml-40  w-90p h-5/6 mx-20 ' id='isvisible'>
              <div className='flex items-center py-5 px-16 w-full'>
                <hr className="w-1/2  mr-1 border-slate-200" />
                <div className='text-transparent text-4xl  italic font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
                  Here Few of My Finite Creations.
                </div>
              </div>
              <div className='h-full hidescroll px-20 flex space-x-6 overflow-x-scroll ' id='hirox' onScroll={() => {
                const elem = document.getElementById("hirox");
                if (elem) {
                  let value: boolean = elem?.scrollWidth - elem?.scrollLeft < (elem?.clientWidth + 20) && elem?.scrollWidth - elem?.scrollLeft > (elem?.clientWidth - 20)
                  myscrolled.current = value
                  setscrolledend(value)
                  isInViewport()
                }

              }}>
                <div className=''>
                  <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                    <img src='https://braydentw.io/static/projects/yei-learn.png' className='p-3 rounded-xl overflow-hidden' />
                    <div className='px-4 space-y-2'>
                      <div className='text-2xl font-serif font-bold '>HyperLedger Based Real Estate Protocol.</div>
                      <div className='text-slate-300 italic text-justify'>&nbsp;&nbsp;&nbsp;&nbsp; Project Focuses on decentralizing real estate stuff and stuf like blah blah blah was a good project indeed tho to show on top of resume hehe</div>
                      <div className='flex flex-wrap list-none'>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Typescript</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>React</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>TailWind</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Fabric</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Nextjs</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                    <img src='https://braydentw.io/static/projects/yei-learn.png' className='p-3 rounded-xl overflow-hidden' />
                    <div className='px-4 space-y-2'>
                      <div className='text-2xl font-serif font-bold '>HyperLedger Based Real Estate Protocol.</div>
                      <div className='text-slate-300 italic text-justify'>&nbsp;&nbsp;&nbsp;&nbsp; Project Focuses on decentralizing real estate stuff and stuf like blah blah blah was a good project indeed tho to show on top of resume hehe</div>
                      <div className='flex flex-wrap list-none'>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Typescript</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>React</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>TailWind</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Fabric</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Nextjs</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                    <img src='https://braydentw.io/static/projects/yei-learn.png' className='p-3 rounded-xl overflow-hidden' />
                    <div className='px-4 space-y-2'>
                      <div className='text-2xl font-serif font-bold '>HyperLedger Based Real Estate Protocol.</div>
                      <div className='text-slate-300 italic text-justify'>&nbsp;&nbsp;&nbsp;&nbsp; Project Focuses on decentralizing real estate stuff and stuf like blah blah blah was a good project indeed tho to show on top of resume hehe</div>
                      <div className='flex flex-wrap list-none'>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Typescript</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>React</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>TailWind</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Fabric</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Nextjs</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                    <img src='https://braydentw.io/static/projects/yei-learn.png' className='p-3 rounded-xl overflow-hidden' />
                    <div className='px-4 space-y-2'>
                      <div className='text-2xl font-serif font-bold '>HyperLedger Based Real Estate Protocol.</div>
                      <div className='text-slate-300 italic text-justify'>&nbsp;&nbsp;&nbsp;&nbsp; Project Focuses on decentralizing real estate stuff and stuf like blah blah blah was a good project indeed tho to show on top of resume hehe</div>
                      <div className='flex flex-wrap list-none'>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Typescript</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>React</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>TailWind</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Fabric</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Nextjs</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                    <img src='https://braydentw.io/static/projects/yei-learn.png' className='p-3 rounded-xl overflow-hidden' />
                    <div className='px-4 space-y-2'>
                      <div className='text-2xl font-serif font-bold '>HyperLedger Based Real Estate Protocol.</div>
                      <div className='text-slate-300 italic text-justify'>&nbsp;&nbsp;&nbsp;&nbsp; Project Focuses on decentralizing real estate stuff and stuf like blah blah blah was a good project indeed tho to show on top of resume hehe</div>
                      <div className='flex flex-wrap list-none'>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Typescript</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>React</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>TailWind</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Fabric</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Nextjs</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                    <img src='https://braydentw.io/static/projects/yei-learn.png' className='p-3 rounded-xl overflow-hidden' />
                    <div className='px-4 space-y-2'>
                      <div className='text-2xl font-serif font-bold '>HyperLedger Based Real Estate Protocol.</div>
                      <div className='text-slate-300 italic text-justify'>&nbsp;&nbsp;&nbsp;&nbsp; Project Focuses on decentralizing real estate stuff and stuf like blah blah blah was a good project indeed tho to show on top of resume hehe</div>
                      <div className='flex flex-wrap list-none'>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Typescript</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>React</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>TailWind</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Fabric</li>
                        <li className='px-4 py-2 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>Nextjs</li>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Home


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