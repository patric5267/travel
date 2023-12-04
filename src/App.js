// import './App.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import play from './images/play.jpg'
import camp from './images/camp.jpg'
import { CgProfile } from "react-icons/cg";
import m1 from './images/m1.png'
import m2 from './images/m2.png'
import './App.css'
import { MdOutlineClose } from "react-icons/md";
import p1 from './images/p1.png'
import p2 from './images/p2.png'
import p3 from './images/p3.png'
import p4 from './images/p4.png'
import { FaMap } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { SiAudiotechnica } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";
import phone from './images/phone.png'
import phones from './images/phones.png'
import { FaApple } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function App() {
  return (
    <>
      <header>
        <nav className=' flex justify-between lg:justify-between items-center my-4 px-3 sm:px-6  '>
          <div className="logo flex font-medium text-xl lg:text-2xl ">
            <p>Hi</p>
            <p className=' text-green-600'>link.</p>
          </div>
          <div className="dropicon lg:hidden">
            <GiHamburgerMenu className=' text-2xl' />
          </div>
          <ul className='list  items-center text-xl hidden lg:flex'>
            <li className=' mr-6 text-gray-400 hover:font-semibold hover:cursor-pointer hover:text-black'>Home</li>
            <li className=' mr-6 text-gray-400 hover:font-semibold hover:cursor-pointer hover:text-black'>How Hilink work?</li>
            <li className=' mr-6 text-gray-400 hover:font-semibold hover:cursor-pointer hover:text-black'>Services</li>
            <li className=' mr-6 text-gray-400 hover:font-semibold hover:cursor-pointer hover:text-black'>Pricing</li>
            <li className=' mr-6 text-gray-400 hover:font-semibold hover:cursor-pointer hover:text-black'>Contact Us</li>
          </ul>
          <button className='hidden lg:flex items-center text-2xl bg-black rounded-full text-white px-5 py-2'>
            <CgProfile className=' mr-2' />
            <p>Login</p>
          </button>
        </nav>
      </header>
      <main className=' mt-8 sm:mt-11 flex w-full  place-items-center flex-col '>
        <section className='maintext px-3 lg:pl-0 lg:pr-0 sm:flex  xl:w-[77rem]'>
          <div className="heading relative  ">
            <h2 className=' text-5xl font-semibold sm:text-6xl lg:text-8xl'>Putuk Truno <br /> Camp Area</h2>
            <p className=' my-5 text-lg text-gray-600 sm:text-xl sm:pr-2 lg:w-[46rem]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
            <div className="stars flex items-center lg:text-xl">
              <ul className=' flex '>
                <li><FaStar className=' text-yellow-400 mr-2' /></li>
                <li><FaStar className=' text-yellow-400 mr-2' /></li>
                <li><FaStar className=' text-yellow-400 mr-2' /></li>
                <li><FaStar className=' text-yellow-400 mr-2' /></li>
                <li><FaStar className=' text-yellow-400 mr-2' /></li>
              </ul>
              <div className="review flex">
                <p className=' font-medium mr-1'>198k</p>
                <p>Excellent Reviews</p>
              </div>
            </div>
            <div className="btns flex flex-col mt-7 sm:flex-row">
              <button className=' bg-[#30af5b] py-2 rounded-full font-semibold text-white sm:px-5 sm:mr-4 xl:px-7 xl:py-3'>Download App</button>
              <button className=' flex items-center justify-center py-2'>
                <img src={play} alt="error" className=' w-7 h-7 mr-1' />
                <h2 className=' font-semibold'>How we work?</h2>
              </button>
            </div>
            <div className="camp">
              <img src={camp} alt="error" className=' w-10 h-10 absolute left-0 top-[-1.8rem]' />
            </div>
          </div>
          <div className="rightsection h-44 mt-7 lg:mt-0 lg:h-72 xl:w-[32rem]   flex items-end ">
            <div className="innerbox bg-black w-56 h-44 lg:w-64 lg:h-52 rounded-xl px-3 flex flex-col justify-evenly">
              <div className="firstbox flex  justify-between">
                <div className="left">
                  <p className=' text-gray-500'>Location</p>
                  <p className=' text-white font-medium'>Aguas Calientes</p>
                </div>
                <div className="right">
                  <MdOutlineClose className=' text-white text-lg' />
                </div>
              </div>
              <div className="secondbox flex  justify-between">
                <div className="left">
                  <p className=' text-gray-500'>Distance</p>
                  <p className=' text-white font-medium'>173.28 mi</p>
                </div>
                <div className="right">
                  <p className=' text-gray-500'>Elevation</p>
                  <p className=' text-white font-medium'>2.040 mi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='midtext w-full flex justify-center  mt-10'>
          <div className='flex overflow-auto lg:overflow-hidden relative '>
            <img src={m1} alt="" className=' min-w-[25rem] lg:min-w-[45rem] lg:h-[25rem] mr-5 rounded-r-xl' />
            <img src={m2} alt="" className=' min-w-[25rem] lg:h-[25rem] rounded-l-xl' />
            <div className=' top-5 absolute left-4 flex items-center '>
              <div className=' bg-green-500 w-10 h-10 xl:w-12 xl:h-12 rounded-full flex justify-center items-center'>
                <FaMap className=' text-2xl text-white' />
              </div>
              <p className=' text-lg text-white font-semibold ml-2 xl:text-2xl'>Putuk Truno Camp ,<br />Prigen, Pasuruan</p>
            </div>
            <div className="images ">
              <div className="collection">
                <img src={p1} alt="" className=' w-10 h-10 xl:w-12 xl:h-12 absolute bottom-7 left-4' />
                <img src={p2} alt="" className=' w-10 h-10  xl:w-12 xl:h-12 absolute bottom-7 left-11' />
                <img src={p3} alt="" className=' w-10 h-10 xl:w-12 xl:h-12 absolute bottom-7 left-[4.5rem] ' />
                <img src={p4} alt="" className=' w-10 h-10 xl:w-12 xl:h-12 absolute bottom-7 left-24' />
                <p className='absolute bottom-8 xl:bottom-9 left-40 font-semibold text-white text-lg xl:text-2xl'>50+ joined</p>
              </div>
            </div>
          </div>
        </section>
        <section className="green w-full flex justify-center px-4 mt-6 lg:relative lg:bottom-36 lg:left-64 lg:w-[30rem] xl:w-[40rem]">
          <div className=' bg-[#008000bd] pl-5 pr-10 py-4 rounded-2xl'>
            <h2 className='   text-white text-xl lg:text-2xl xl:text-4xl xl:tracking-normal'><b>Feeling Lost</b> And Not Knowing The Way?</h2>
            <p className=' text-white text-sm mt-3 lg:text-lg xl:text-sm xl:pr-10'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
          </div>
        </section>
        <section className=' w-full px-3 mt-9 lg:px-12 xl:flex xl:items-center xl:justify-center'>
          <div className='  xl:w-96 '>
            <img src={camp} alt="" className=' w-10 h-10' />
            <h2 className=' font-semibold text-green-500 sm:text-lg '>WE ARE HERE FOR YOU</h2>
            <p className=' font-semibold text-4xl sm:text-5xl xl:text-7xl '>Guide You to Easy Path</p>
          </div>
          <p className=' mt-4 sm:mt-6 text-gray-600 sm:text-base   xl:w-[54rem] xl:pl-44 xl:pr-12 xl:text-xl'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </section>
        <section className=' w-full flex mt-10'>
          <div className=' w-full flex justify-center'>
            <div className='boat w-full xl:w-[89rem]  py-2 lg:h-80  flex justify-center lg:justify-start  items-center'>
              <div className=' bg-white h-36 w-64 sm:h-56  rounded-xl flex items-center px-4 lg:ml-4'>
                <div className='map flex flex-col place-items-center'>
                  <div className='blackc w-4 h-4 rounded-full bg-white flex justify-center items-center border-black border-[1px] border-solid'>
                    <div className="whitechircle w-2 h-2 bg-black rounded-full">

                    </div>
                  </div>
                  <div className="line bg-gray-200 w-2 h-24">

                  </div>
                  <div className='blackc w-4 h-4 rounded-full bg-white flex justify-center items-center border-black border-[1px] border-solid'>
                    <div className="whitechircle w-2 h-2 bg-green-500 rounded-full">

                    </div>
                  </div>
                </div>
                <div className="cityname h-full flex flex-col justify-between sm:justify-evenly py-2 pl-4 ">
                  <div className="desti flex">
                    <div className="leftdesti">
                      <h2 className=' text-gray-400 font-semibold'>Destination</h2>
                      <p className=' font-bold text-lg'>Aguas Calientes</p>
                    </div>
                    <div className="rightdesti">
                      <p className='text-green-500 font-semibold'>48 min</p>
                    </div>
                  </div>
                  <div className="track">
                    <h2 className=' text-gray-400 font-semibold'>Start Track</h2>
                    <p className=' font-bold text-lg'>Wonorejo Pasuruan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='allfeautes  w-full mt-7 lg:flex lg:items-center lg:justify-center lg:mt-24'>
          <div className=' hidden lg:block lg:mr-10   '>
            <img src={phone} alt="" className=' rotate-6' />
          </div>
          <div className='featuurelist pl-4 pr-6  md:pr-0 lg:pl-0  lg:w-[39rem] max-h-full '>
            <img src={camp} alt="" className=' w-10 h-10' />
            <h2 className=' font-bold text-5xl'>Our features</h2>
            <div className="featurecategory grid grid-cols-1 md:grid-cols-2 md:justify-evenly">
              <div className=' mt-7'>
                <div className=' bg-green-500 w-12 h-12 rounded-full text-white flex justify-center items-center'>
                  <FiMapPin className=' text-2xl' />
                </div>
                <h2 className=' font-bold text-xl my-4'>Real Maps Can Be Offline</h2>
                <p className=' text-gray-500 md:pr-4'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
              </div>
              <div className=' mt-7'>
                <div className=' bg-green-500 w-12 h-12 rounded-full text-white flex justify-center items-center'>
                  <FaCalendarAlt className=' text-2xl' />
                </div>
                <h2 className=' font-bold text-xl my-4'>Set An Adventure Schedule</h2>
                <p className=' text-gray-500 md:pr-4'>Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion</p>
              </div>
              <div className=' mt-7'>
                <div className=' bg-green-500 w-12 h-12 rounded-full text-white flex justify-center items-center'>
                  <SiAudiotechnica className=' text-2xl' />
                </div>
                <h2 className=' font-bold text-xl my-4'>Technology Using Augment Reality</h2>
                <p className=' text-gray-500 md:pr-4'>Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection</p>
              </div>
              <div className=' mt-7'>
                <div className=' bg-green-500 w-12 h-12 rounded-full text-white flex justify-center items-center'>
                  <GrMapLocation className=' text-2xl' />
                </div>
                <h2 className=' font-bold text-xl my-4'>Many New Locations Every Month</h2>
                <p className=' text-gray-500 md:pr-4'>Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing</p>
              </div>
            </div>
          </div>
        </section>
        <section className=' lastsection mt-10 lg:mt-5 bg-[#292d27] py-10 w-full xl:w-[84.3rem] pl-4 pr-5 flex flex-col sm:flex-row sm:justify-evenly'>
          <div className=' textios text-white sm:flex sm:justify-center sm:flex-col'>
            <h1 className='  font-bold text-4xl lg:text-6xl'>Get for free now!</h1>
            <p className=' my-10'>Available on IOS and Android</p>
            <div className="btns w-full ">
              <button className=' flex w-full bg-white items-center  py-3 justify-center rounded-3xl'>
                <FaApple className=' text-green-600 text-2xl mr-1' />
                <p className=' text-green-600 text-xl font-medium'>App Store</p>
              </button>
              <button className=' flex w-full bg-transparent border-white border-[1px] border-solid items-center  py-3 mt-2 justify-center rounded-3xl'>
                <FaPlay className=' text-green-600 text-2xl mr-1' />
                <p className=' text-green-600 text-xl font-medium'> Play Store</p>
              </button>
            </div>
          </div>
          <div className='twophones mt-10  flex justify-center md:justify-normal'>
            <img src={phones} alt="" className=' w-56 md:w-72 lg:w-96 xl:w-[30rem]' />
          </div>
        </section>
      </main>
      <footer className=' pl-4 mt-12 md:pl-0 md:flex md:justify-evenly md:items-start '>
        <div className=' logo'>
          <div className="logo flex font-medium text-xl lg:text-2xl ">
            <p>Hi</p>
            <p className=' text-green-600'>link.</p>
          </div>
        </div>
        <div className=' firstitem'>
          <h2 className=' font-medium text-lg mt-7 md:mt-0 mb-4'>Learn More</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm'>About Hilink</li>
            <li className=' mb-2 md:text-sm'>Press Releses</li>
            <li className=' mb-2 md:text-sm'>Environment</li>
            <li className=' mb-2 md:text-sm'>Jobs</li>
            <li className=' mb-2 md:text-sm'>Privacy Policy</li>
            <li className=' mb-2 md:text-sm'>Contact Us</li>
          </ul>
        </div>
        <div className=' firstitem'>
          <h2 className=' font-medium text-lg mt-7 md:mt-0 mb-4'>Our Community</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm'>Climbing xixixi</li>
            <li className=' mb-2 md:text-sm'>Hiking hilink</li>
            <li className=' mb-2 md:text-sm'>Hilink kinthili</li>
          </ul>
        </div>
        <div className="contactus">
          <h2 className=' font-medium text-lg mt-7 md:mt-0 mb-4'>Contact Us</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm'>Admin Officer: <b className='ml-2'>123-456-7890</b></li>
            <li className=' mb-2 md:text-sm'>Email Officer:  <b className='ml-2'>hilink@akinthil.com</b></li>
          </ul>
        </div>
        <div className="social">
          <h2 className=' font-medium text-lg mt-7 md:mt-0 mb-4'>Social</h2>
          <ul className=' flex '>
            <li className='mr-4'><FaFacebook className=' text-2xl'/></li>
            <li className='mr-4'><FaSquareInstagram className=' text-2xl' /></li>
            <li className='mr-4'><FaTwitter className=' text-2xl'/></li>
            <li className='mr-4'><FaYoutube className=' text-2xl'/></li>
          </ul>
        </div>
      </footer>
      <div className="line flex justify-center py-10 flex-col place-items-center">
           <div className="linebox bg-gray-300 h-[0.7px] w-60 md:w-[30rem] xl:w-[40rem]">

           </div>
           <p className=' text-gray-500 py-6'>2023 Hilink | All rights reserved</p>
          </div>
      
    </>

  );
}

export default App;
