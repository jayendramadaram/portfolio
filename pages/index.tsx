import type { NextPage } from 'next'
import Image from 'next/image'

import { BsCurrencyBitcoin, BsGithub, BsHddStack, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
import { MdOutlineManageAccounts, MdWeb } from "react-icons/md"
import { TbSettingsAutomation } from "react-icons/tb"
import { GiHighPunch } from "react-icons/gi"
import { useEffect, useState, useRef } from 'react'
import "animate.css/animate.min.css";
import Navbar from '../components/Navbar'
import Typewriter from 'typewriter-effect';
import Solidity from "../assets/solidity.png"
import docker from "../assets/docker.png"
import graphql from "../assets/graphql.png"
import py from "../assets/py.png"
import rs from "../assets/rs.png"
import truffle from "../assets/truffle.png"
import hardhat from "../assets/hardhat.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import Naruto from "../assets/Naruto.jpg"

import { Projects } from '../constants'
import { useRouter } from 'next/router'
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';




const Home: NextPage = () => {
  const router = useRouter()
  const [shrink, setshrink] = useState<boolean>(true);
  const [open, setopen] = useState<boolean>(false);
  const [innerwidth, setinnerwidth] = useState<number>(900);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("wheel", (event) => onWheelScroll(event))
      setinnerwidth(window.innerWidth)
    }
  }, [])

  const onWheelScroll = (event: WheelEvent) => {
    let elem = document.getElementById("refer")?.getBoundingClientRect()
    if (elem) {
      setshrink(elem.top > window.innerHeight - elem.height - 60);
    }

  }


  return (
    <div className="flex text-slate-50 flex-col hidescroll items-center  bg-bgc1 overflow-hidden" onScroll={() => {
      console.log("please  i bget you");

    }}>
      <div className={`z-40 h-screen  left-0 fixed bg-black text-white ${open ? "w-screen " : "w-0 overflow-x-hidden"} transition-all`}>
        <div className={`text-5xl z-40 fixed top-0 right-4 ${open ? "" : "hidden"}`} onClick={() => setopen(false)}>
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
      <Navbar setOPEN={setopen} shrink={shrink} />
      <div className='hidescroll flex' onScroll={() => {

      }}>

        <div className='hidden  h-screen sm:flex fixed flex-col-reverse hidescroll z-30 space-y-4 items-center w-14  md:w-20'>
          <div className='   h-40 mt-2 w-1 rounded-t-full bg-violet-100'></div>
          <BsGithub onClick={() => router.push("https://github.com/jayendramadaram")} className=' hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-black w-8 h-8 cursor-pointer text-violet-100' />
          <BsLinkedin onClick={() => router.push("https://www.linkedin.com/in/jayendra-madharam-961922200/")} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-900 w-8 h-8 cursor-pointer text-violet-100 hover:bg-white rounded-md' />
          <BsInstagram onClick={() => router.push("https://www.instagram.com/jayendra__02")} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-insta w-8 h-8 cursor-pointer text-violet-100 ' />
          <BsTwitter onClick={() => router.push("https://twitter.com/jayendra__02")} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-blue-400 w-8 h-8 cursor-pointer text-violet-100' />
          <BsYoutube onClick={() => router.push("https://www.youtube.com/channel/UCU-GtEsT63xs4onwQLvmFPA")} className='hover:scale-150 transition-all delay-75 ease-in-out duration-200 hover:text-red-500 w-8 h-8 cursor-pointer text-violet-100' />
        </div>



        <div className='hidescroll flex-col px-16  items-center flex w-screen' onScroll={() => {
          console.log("please  i bgsdet you");
        }}>








          <div className=' xl:flex space-y-14 xl:mb-0 mb-32 xl:space-y-0 items-center mt-14 md:p-10 justify-between overflow-x-hidden xl:h-screen '>

            <div className='flex items-center xl:items-start  flex-col space-y-3 p-10 xl:w-1/2 relative overflow-hidden'>
              <div className='flex space-x-5'>
                <div>
                  <div className='flex items-center mt-32 space-x-2'>
                    <hr className="w-16 sm:w-24 mr-1 border-slate-200" />
                    <div className='text-transparent text-lg font-semibold bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-400'>Who Am i ?</div>
                  </div>
                  <div className='flex space-x-6 sm:items-baseline justify-center items-center'>
                    <h1 className='font-sans sm:text-4xl text-2xl md:text-5xl font-bold sm:ml-0 '>Jayendra Madaram</h1>
                    <img src="https://harshgoel.me/images/vectors/triangle.svg" alt="Triangle 3d Vector" className=" hidden xl:block  w-2/3 md:w-16 animate-spin-slow"></img>
                  </div>
                </div>
              </div>
              <div className='flex md:text-2xl text-lg'>
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
              <h5 className="text-lg  font-normal text-slate-300 xl:w-4/5 w-4/5 text-violet  text-justify">
                <div className='hidden md:block'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> "A fresher with experience", Trying to make world a better place with decentralized governence by Building scalable & secured BlockChain products </h5>
              <div className='sm:justify-start space-x-5 px-5 xm:w-2/5 flex'>
                <button className='px-7 py-3 border rounded-lg border-red-200 shadow-xl hover:shadow-gray-500  bg-red-200 hover:bg-transparent hover:text-white text-slate-900 transition ease-in-out delay-150 duration-300' onClick={() => router.push("https://drive.google.com/file/d/1buUbXLgHfsBKHQqa-I8pLrj_fKMwLJMs/view?usp=sharing")}>
                  Resume
                </button>
                <button className='px-7  py-3 border shadow-lg hover:shadow-gray-600 rounded-lg hover:bg-red-200 hover:text-slate-900 transition ease-in-out delay-150 duration-300 border-red-200'>
                  Github
                </button>
              </div>
            </div>
            <div className='flex  justify-center items-center xl:w-1/2 '>
              <img className=' bg-pink-50 w-96 sm:w-w5p  rotate-12 z-20 rounded-3xl hover:rotate-0 transition-all cursor-pointer delay-75 duration-200' height={450} src="https://raw.githubusercontent.com/jayendramadaram/portfolio/main/assets/Naruto.jpg" alt="Jayendra Madaram" />
              <div className='hidden sm:grid absolute about__me  sm:w-w5p rounded-3xl z-10'></div>
              <img src="https://harshgoel.me/images/vectors/ellipse.svg" alt="Triangle 3d Vector" className="absolute  bottom-0 right-0 hidden w-1/4 z-0 md:block "></img>
            </div>
            <div className='absolute bottom-0 cursor-pointer right-1/2 animate-bounce' id='refer' onClick={() => window.scrollBy(0, window.innerHeight - 55)}>
              <div className="animate-bounce bg-slate-800 p-2 w-0 h-1 xl:w-10 xl:h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6  text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>








          <div className='sm:h-screen relative pb-20 w-screen flex sm:flex-row flex-col justify-between pl-7 sm:pl-20 lg:pl-32 items-center' id='explore'>
            <div className='absolute bottom-24 right-1/3 '>
              <img src="https://harshgoel.me/images/vectors/l-vector.svg" className='opacity-60 ' alt="" />
            </div>
            <div className='flex  flex-col items-center sm:items-start space-y-1 mb-10 lg:p-10 sm:w-1/2 relative overflow-hidden'>
              <div className='flex space-x-5'>
                <div>
                  <div className='flex items-center sm:space-x-2'>
                    <hr className="w-16 hidden sm:block sm:w-24 mr-1 border-slate-200" />
                    <div className='text-transparent text-sm sm:text-lg font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>What does he do ?</div>
                  </div>
                </div>
              </div>
              <h5 className="text-lg lg:text-2xl pb-5 font-semibold font-sans text-slate-300 w-11/12 sm:w-3/5 ">He creates elegant, scalable web defi solutions. In his hobby time, he designs. </h5>
              <div className='justify-start space-x-5 animate-pulse  sm:w-2/5 flex'>
                <div className=' text-3xl lg:text-7xl flex sm:flex-col sm:space-x-4  font-extrabold'>
                  <div className='flex space-x-4 sm:pr-0 pr-4'>
                    <h3>Think.</h3>
                    <h3 className='text-pink-300'>Code.</h3>
                  </div>
                  <h3>Debug.</h3>
                </div>
              </div>
            </div>
            <div className='flex sm:w-1/2 justify-center mb-10 animate__fadeInRightBig relative items-center'>
              <div className='absolute top-0 right-0'>
                <img src="https://harshgoel.me/images/vectors/cylinder.svg" className='opacity-40 rightanimte transition-all  ' alt="" />
              </div>
              <AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce={true}> <div className='flex sm:w-4/5 space-x-4 lg:space-x-0 justify-evenly  items-center flex-wrap'>
                <Image src={Solidity} alt="MongoDB" width={200} className="lg:h-14 sm:h-8 h-8 mt-7" />
                <img src="https://harshgoel.me/images/skills/mongodb.svg" alt="MongoDB" className={`lg:h-14 sm:h-8 h-8 mt-7`} />
                <img src="https://harshgoel.me/images/skills/react.svg" alt="React" className={`lg:h-14 sm:h-8 h-8 mt-7`} />
                <img src="https://harshgoel.me/images/skills/ts.svg" alt="Typescript" className={`lg:h-14 sm:h-8 h-8 mt-7`} />
                <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="Nestjs" className={`lg:h-14 sm:h-8 h-8 mt-7`} />
                <img src="https://harshgoel.me/images/skills/express.svg" alt="Express" className={`lg:h-14 sm:h-8 h-8 mt-7`} />
                <img src="https://harshgoel.me/images/skills/nextjs.svg" alt="MongoDB" className={`lg:h-14 sm:h-8 h-8 mt-7`} />
                <img src="https://harshgoel.me/images/skills/git.svg" alt="Git" className={`lg:h-14 sm:h-8 h-8 mt-7`} />
                <Image src={docker} alt="MongoDB" width={200} className="lg:h-14 w-24 lg:w-auto sm:h-8 h-8 mt-7" />
                <Image src={graphql} alt="MongoDB" width={200} className="lg:h-14 w-24 lg:w-auto sm:h-8 h-8 mt-7" />
                <Image src={py} alt="MongoDB" width={100} className="lg:h-14 w-8 lg:w-auto sm:h-8 h-8 mt-7" />
                <Image src={rs} alt="MongoDB" width={100} className="lg:h-14 w-8 lg:w-auto sm:h-8 h-8 mt-7" />
                <Image src={truffle} alt="MongoDB" height={100} className="lg:h-14 w-8 lg:w-auto sm:h-8 h-8 mt-7" />
                <Image src={hardhat} alt="MongoDB" height={70} className="lg:h-14 w-8 lg:w-auto sm:h-8 h-8 mt-7" />
                {/* <Image src={Selenium} alt="Selenium" height={70} className="lg:h-14 w-8 lg:w-auto h-8 mt-7" /> */}
                <img src="https://raw.githubusercontent.com/jayendramadaram/portfolio/main/assets/selenium.png" alt="Git" className="lg:h-32 w-8 w-auto h-16 mt-7" />
              </div></AnimationOnScroll>

            </div>
          </div>
          <div className='mb-11  flex-wrap space-y-7 md:space-y-0 w-screen flex xl:justify-between sm:pl-24 sm:pr-8 xl:items-center'>
            <div className='sm:w-1/2 xl:w-1/3 flex flex-col sm:h-1/3 space-y-3 justify-center items-center'>
              <div><BsCurrencyBitcoin className='w-14 h-14 p-3  rounded-full rotate-12 bg-black shadow-light-3xl' /></div>
              <div className='text-3xl text-slate-300 font-bold  text-center'>Block-Chain Development</div>
              <div className='text-lg italic  w-4/6 flex text-center items-center text-gray-300'>
                Engaged into blockchain development. Building Dapps on ethereum , Avalanche , Near Protocol. Demonstrated success developing and seamlessly executing Smart contracts written in Solidity and RUST in defi and Dao structures.
              </div>
            </div>
            <div className='sm:w-1/2 xl:w-1/3 flex flex-col sm:h-1/3 space-y-3 justify-center items-center'>
              <div><BsHddStack className='w-14 h-14 p-3  rounded-full rotate-12 bg-black shadow-light-3xl' /></div>
              <div className='text-3xl text-slate-300 font-bold text-center'>Full Stack Engineering</div>
              <div className='text-lg italic  w-5/6 flex text-center items-center text-gray-300'>
                Been a full stack developer who can develop neat aesthetic UI/UX which are Seo First using frameworks Like Nextjs. Familiar with several API methodologies like Grpc , Rest , GROQ and Graphql.Can addapt Microservice Architecture using RabbitMq and Nestjs and many more server side functionalities.
              </div>
            </div>
            <div className='sm:w-1/2 xl:w-1/3 flex flex-col sm:h-1/3 space-y-3 justify-center items-center'>
              <div><MdWeb className='w-14 h-14 p-3  rounded-full  bg-black shadow-light-3xl' /></div>
              <div className='text-3xl text-slate-300 font-bold text-center'>WebScrapping</div>
              <div className='text-lg italic  w-4/6 flex text-center items-center text-gray-300'>
                Familiar with scrapping data from Web using tools like Selenium and beautiful soup further designing automated workflows to Organize , Analyize , visualize using tools like seaborn, excel. Further Storing it in Sql or NoSql DataBases
              </div>
            </div>
            <div className='sm:w-1/2 xl:w-1/3 lg:pt-11 flex flex-col sm:h-1/3 space-y-3 justify-center items-center'>
              <div><TbSettingsAutomation className='w-14 h-14 p-3  rounded-full rotate-12 bg-black shadow-light-3xl' /></div>
              <div className='text-3xl text-slate-300 font-bold text-center'>Automation </div>
              <div className='text-lg italic  w-4/6 flex text-center items-center text-gray-300'>
                Designing Various Bot for Social media like Instagram , Discord , Twitter and Telegram. Automating workflows increasing Reach. Desinging Automated workflow of regular tasks with Raw Python and 3rd party SDK's.
              </div>
            </div>
            <div className='sm:w-1/2 xl:w-1/3 lg:pt-11 flex flex-col sm:h-1/3 space-y-3 justify-center items-center'>
              <div><GiHighPunch className='w-14 h-14 p-3  rounded-full  bg-black shadow-light-3xl' /></div>
              <div className='text-3xl text-slate-300 font-bold text-center'>Martial Arts</div>
              <div className='text-lg italic  w-4/6 flex text-center items-center text-gray-300'>
                Been a National Gold medalist twice in the sport of Taekwondo. Personal Hobby developed into a passion which keeps me disciplined in professional Life.
              </div>
            </div>
            <div className='sm:w-1/2 xl:w-1/3 lg:pt-11 flex flex-col sm:h-1/3 space-y-3 justify-center items-center'>
              <div><MdOutlineManageAccounts className='w-14 h-14 p-3 text-white rounded-full bg-black shadow-light-3xl' /></div>
              <div className='text-3xl text-slate-300 font-bold text-center'>Mentoring skills</div>
              <div className='text-lg italic  w-4/6 flex text-center items-center text-gray-300'>
                Been a Mentor for several Blockchain projects at my college NGIT. Helped them being as a Project Manager from assinging tasks and monitoring version control to Sharing resources and teaching the right way.
              </div>
            </div>
          </div>
          <div className='xl:h-screen w-screen flex  justify-center items-center' id='projects'>
            <div className=' rounded-2xl bg-gray-800  flex flex-col sm:ml-40  w-90p h-screen lg:h-90p xl:h-5/6  mx-20 ' id='isvisible'>
              <div className='flex items-center py-5 sm:px-16 w-full'>
                <hr className="w-1/2  mr-1 border-slate-200" />
                <div className='text-transparent xl:text-4xl text-lg md:text-2xl lg:text-3xl  italic font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
                  Here are few of my finite creations.
                </div>
              </div>
              <AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce={true}> <div className='h-full customscroll sm:px-20 px-5 flex space-x-6 overflow-x-scroll overflow-y-hidden' id='hirox' onScroll={() => {
                const elem = document.getElementById("hirox");
                if (elem) {
                  // let value: boolean = elem?.scrollWidth - elem?.scrollLeft < (elem?.clientWidth + 20) && elem?.scrollWidth - elem?.scrollLeft > (elem?.clientWidth - 20)
                  // myscrolled.current = value
                  // setscrolledend(value)
                  // isInViewport()
                }

              }}>
                {
                  Projects.map((elem, index) => (
                    <div className='' key={index} onClick={() => router.push(elem.Link)}>
                      <div className='rounded-xl mt-5 z-10 transition-all delay-75 duration-200 hover:bg-gray-700 hover:scale-105 cursor-pointer pb-3 space-y-1 w-96 border '>
                        <img alt='Jayendra madaram project' height={30} width={innerwidth < 500 ? 300 : 900} src={`${elem.imgLink}`} className='p-3 w-96 rounded-xl overflow-hidden' />
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
              </div> </AnimationOnScroll>

            </div>
          </div>
          <div id='contact' className='md:h-screen lg:flex hidden relative pb-20 w-screen  justify-between md:pl-11 xl:pl-24 z-0 items-center'>
            <div className='absolute bottom-24 right-1/3 '>
              <img src="https://harshgoel.me/images/vectors/l-vector.svg" className='opacity-60 ' alt="" />
            </div>
            <button className='absolute right-50p bottom-24 px-7  py-3 border shadow-lg hover:shadow-gray-600 rounded-lg hover:bg-bgc1 bg-red-200 hover:text-white font-semibold text-slate-900 transition ease-in-out delay-150 duration-300 border-red-200 ' onClick={() => router.push("/connect")}>Lets Connect 🚀</button>
            <div className='flex  flex-col space-y-1 xl:mb-10 p-10 w-1/2 relative overflow-hidden'>
              <div className='flex space-x-5'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <hr className="w-16 sm:w-24 mr-1 border-slate-200" />
                    <div className='text-transparent text-lg font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Meet and Greet!!</div>
                  </div>
                </div>
              </div>
              <h5 className=" xl:text-xl text-sm  pb-5 font-semibold font-sans text-slate-300 w-3/5 ">Impressed Already!! Schedule a 30 Min Gmeet or a call with me.  </h5>
              <div className='justify-start space-x-5 animate-pulse  w-2/5 flex'>
                <div className=' text-7xl font-extrabold'>
                  <div className='flex space-x-4'>
                    <h3>Meet.</h3>
                    <h3 className='text-pink-300'>Ideate.</h3>
                  </div>
                  <h3>Hack.</h3>
                </div>
              </div>
            </div>
            <div className='sm:flex hidden w-1/2 justify-center xl:mb-10 relative items-center'>
              <div className='flex w-4/5 justify-evenly  items-center flex-wrap'>
                <img src="https://harshgoel.me/images/vectors/contact.svg" alt="Git" className="" />
              </div>
            </div>
          </div>
          <div id='contact' className='md:h-screen lg:hidden flex flex-col relative pb-20 w-screen  justify-between md:pl-11 xl:pl-24 z-0 items-center'>
            <div className='absolute bottom-24 right-1/3 '>
              <img src="https://harshgoel.me/images/vectors/l-vector.svg" className='opacity-60 ' alt="" />
            </div>
            <button className='absolute mx-auto bottom-0 px-7  py-3 border shadow-lg hover:shadow-gray-600 rounded-lg hover:bg-bgc1 bg-red-200 hover:text-white font-semibold text-slate-900 transition ease-in-out delay-150 duration-300 border-red-200 ' onClick={() => router.push("/connect")}>Lets Connect 🚀</button>
            <div className='flex w-full items-center flex-col space-y-1 xl:mb-10 p-10  relative overflow-hidden'>
              <div className='flex space-x-5'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <div>✨</div>
                    <div className='text-transparent text-2xl font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> Meet and Greet !!  </div>
                    <div>✨</div>
                  </div>
                </div>
              </div>
              <div className='flex  w-96 justify-center xl:mb-10 relative items-center'>
                <div className='flex w-4/5 justify-evenly  items-center flex-wrap'>
                  <img src="https://harshgoel.me/images/vectors/contact.svg" alt="Git" className="" />
                </div>
              </div>
              <h5 className=" xl:text-xl text-lg  pb-5 font-semibold font-sans text-center text-slate-300 w-3/5 ">Impressed Already !! Schedule a 30 Min Gmeet or a Call with me  </h5>
              <div className='justify-start space-x-5 animate-pulse  flex'>
                <div className='sm:text-5xl text-3xl md:text-7xl font-extrabold'>
                  <div className='flex space-x-4'>
                    <h3>Meet.</h3>
                    <h3 className='text-pink-300'>Ideate.</h3>
                    <h3>Hack.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex justify-center h-32 items-center sm:space-x-5 text-xl'>
        <hr className="w-16 hidden sm:block sm:w-1/5 mr-1 border-slate-200" />
        <div className='flex items-center space-x-3'>
          <div>Made with 💖 By</div>
          <div className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> Jayendra Madaram</div>
        </div>
        <hr className="w-16 hidden sm:block sm:w-1/5 mr-1 border-slate-200" />
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