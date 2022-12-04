import type { NextPage } from 'next'
import Image from 'next/image'

import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
import { useEffect, useState, useRef } from 'react'

import Navbar from '../components/Navbar'
import Typewriter from 'typewriter-effect';
import AVATAR from "../assets/avatar.png"
import Solidity from "../assets/solidity.png"
import docker from "../assets/docker.png"
import graphql from "../assets/graphql.png"
import py from "../assets/py.png"
import rs from "../assets/rs.png"
import truffle from "../assets/truffle.png"
import hardhat from "../assets/hardhat.png"
import Selenium from "../assets/selenium.png"
import { Projects } from '../constants'
import { useRouter } from 'next/router'



const Home: NextPage = () => {
  const router = useRouter()
  const [scrolledEnd, setscrolledend] = useState<boolean>(false);
  const [canScroll, setcanScroll] = useState<boolean>(false);
  const [shrink, setshrink] = useState<boolean>(true);

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
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", () => {
        isInViewport()
      })
      window.addEventListener("wheel", (event) => onWheelScroll(event))
    }
  }, [])

  const onWheelScroll = (event: WheelEvent) => {
    let elem = document.getElementById("refer")?.getBoundingClientRect()
    if (elem) {
      setshrink(elem.top > window.innerHeight - elem.height - 60);
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
    <div className="flex text-slate-50  hidescroll items-center  bg-bgc1 overflow-hidden" onScroll={() => {
      console.log("please  i bget you");
    }}>
      <Navbar shrink={shrink} />
      <div className='hidescroll flex' onScroll={() => {
        console.log(2);
      }}>
        <div className='h-screen flex fixed flex-col-reverse hidescroll space-y-4 items-center w-20'>
          <div className='h-full md:h-40 mt-2 w-1 rounded-t-full bg-violet-100'></div>
          <BsGithub className=' hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-black w-8 h-8 cursor-pointer text-violet-100' />
          <BsLinkedin className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-900 w-8 h-8 cursor-pointer text-violet-100 hover:bg-white rounded-md' />
          <BsInstagram className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-insta w-8 h-8 cursor-pointer text-violet-100 ' />
          <BsTwitter className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-400 w-8 h-8 cursor-pointer text-violet-100' />
          <BsYoutube onClick={() => logger()} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-red-500 w-8 h-8 cursor-pointer text-violet-100' />
        </div>

        <div className='hidescroll flex-col px-16  items-center flex w-screen' onScroll={() => {
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
                <button className='px-7 py-3 border rounded-lg border-red-200 shadow-xl hover:shadow-gray-500  bg-red-200 hover:bg-transparent hover:text-white text-slate-900 transition ease-in-out delay-150 duration-300'>
                  Resume
                </button>
                <button className='px-7  py-3 border shadow-lg hover:shadow-gray-600 rounded-lg hover:bg-red-200 hover:text-slate-900 transition ease-in-out delay-150 duration-300 border-red-200'>
                  Github
                </button>
              </div>
            </div>
            <div className='flex  justify-center items-center w-1/2 '>
              <img className=' bg-pink-50 rotate-12 z-20 rounded-3xl hover:rotate-0 transition-all cursor-pointer delay-75 duration-200' width={450} height={450} src="https://i.pinimg.com/474x/e6/f8/82/e6f882c4d35c48b0e84dabcb3ded700f.jpg" alt="Jayendra Madaram" />
              <div className='absolute about__me w-img h-img rounded-3xl z-10'></div>
              <img src="https://harshgoel.me/images/vectors/ellipse.svg" alt="Triangle 3d Vector" className="absolute  bottom-0 right-0 hidden w-1/4 z-0 md:block "></img>
            </div>
            <div className='absolute bottom-0 cursor-pointer right-1/2 animate-bounce' id='refer' onClick={() => window.scrollBy(0, window.innerHeight - 55)}>
              <div className="animate-bounce bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6  text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className='h-screen relative pb-20 w-screen flex justify-between pl-32 items-center'>
            <div className='absolute bottom-24 right-1/3 '>
              <img src="https://harshgoel.me/images/vectors/l-vector.svg" className='opacity-60 ' alt="" />
            </div>
            <div className='flex  flex-col space-y-1 mb-10 p-10 w-1/2 relative overflow-hidden'>
              <div className='flex space-x-5'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <hr className="w-16 sm:w-24 mr-1 border-slate-200" />
                    <div className='text-transparent text-lg font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>What does he do ?</div>
                  </div>
                </div>
              </div>
              <h5 className="text-2xl pb-5 font-semibold font-sans text-slate-300 w-3/5 ">He creates elegant, scalable web defi solutions. In his hobby time, he designs. </h5>
              <div className='justify-start space-x-5 animate-pulse  w-2/5 flex'>
                <div className=' text-7xl font-extrabold'>
                  <div className='flex space-x-4'>
                    <h3>Think.</h3>
                    <h3 className='text-pink-300'>Code.</h3>
                  </div>
                  <h3>Debug.</h3>
                </div>
              </div>
            </div>
            <div className='flex w-1/2 justify-center mb-10 relative items-center'>
              <div className='absolute top-0 right-0'>
                <img src="https://harshgoel.me/images/vectors/cylinder.svg" className='opacity-40 rightanimte transition-all  ' alt="" />
              </div>
              <div className='flex w-4/5 justify-evenly  items-center flex-wrap'>
                <Image src={Solidity} alt="MongoDB" width={200} className="   mt-7" />
                <img src="https://harshgoel.me/images/skills/mongodb.svg" alt="MongoDB" className="h-14 mt-7" />
                <img src="https://harshgoel.me/images/skills/react.svg" alt="React" className="h-14 mt-7" />
                <img src="https://harshgoel.me/images/skills/ts.svg" alt="Typescript" className="h-14 mt-7" />
                <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="Nestjs" className="h-14 mt-7" />
                <img src="https://harshgoel.me/images/skills/express.svg" alt="Express" className="h-14 mt-7" />
                <img src="https://harshgoel.me/images/skills/nextjs.svg" alt="MongoDB" className="h-14 mt-7" />
                <img src="https://harshgoel.me/images/skills/git.svg" alt="Git" className="h-14 mt-7" />
                <Image src={docker} alt="MongoDB" width={200} className="mt-7" />
                <Image src={graphql} alt="MongoDB" width={200} className="mt-7" />
                <Image src={py} alt="MongoDB" width={100} className="mt-7" />
                <Image src={rs} alt="MongoDB" width={100} className="mt-7" />
                <Image src={truffle} alt="MongoDB" height={100} className="mt-7" />
                <Image src={hardhat} alt="MongoDB" height={70} className="mt-7" />
                {/* <Image src={Selenium} alt="Selenium" height={70} className="mt-7" /> */}
                <img src="https://raw.githubusercontent.com/jayendramadaram/portfolio/main/assets/selenium.png" alt="Git" className="h-32" />
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
                {
                  Projects.map((elem, index) => (
                    <div className='' key={index} onClick={() => router.push(elem.Link)}>
                      <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                        <img src={`${elem.imgLink}`} height={30} width={900} className='p-3 rounded-xl overflow-hidden' />
                        <div className='px-4 space-y-2'>
                          <div className='text-2xl font-serif font-bold '>{elem.name}</div>
                          <div className='text-slate-300 italic text-justify'>&nbsp;&nbsp;&nbsp;&nbsp; {elem.description}</div>
                          <div className='flex flex-wrap list-none'>
                            {elem.tags.map((ele, index) => (
                              <li key={index} className='px-3 py-1 mt-2 mr-2  bg-labels rounded-lg text-slate-100 font-bold '>{ele}</li>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
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