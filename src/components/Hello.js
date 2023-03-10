import React, { useEffect, useRef } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Linky from 'react-scroll';
import Login from './Login';
import Register from './Register';
import { auth } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import Quiz from './Quiz';
import AdultChart from '../AdultChart';
import { documentId } from 'firebase/firestore';
import { bird1Img, bird2Img, forestImg, rocksImg, waterImg, treeImg, circleChart, mapChart, mapChart2, covid, covid2, covid3, mentalImg, mentalImg1 } from './constant';
import ImageSlider from './ImageSlider';

const Home = () => {
  const text = document.getElementById('text');
  const bird1 = document.getElementById('bird1');
  const bird2 = document.getElementById('bird2');
  const forest = document.getElementById('forest');
  const rocks = document.getElementById('rocks');
  const water = document.getElementById('water');
  const btn = document.getElementById('home_btn');

  const tree = document.getElementById('tree');

  window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%'; //* 0.5 is the speed of the movement
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    forest.style.top = value * -0.55 + 'px';
    tree.style.top = value * 0.15 + 'px';
    rocks.style.top = value * -0.1 + 'px';
    // btn.style.marginTop = value * 1.5 + 'px';
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className="w-full h-screen">
      {/* <section id="main_sec" className="flex flex-col justify-center items-center w-full h-screen relative bg-[#ADD8E6] text-red ">
        <h2 className="flex justify-center items-center text-9xl font-bold text-center  " id="text" style={{ fontSize: '5vw' }} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0"> */}
      {/* <span className="tracking-wide leading-none ">
            {' '}
            Hello <br />
            {user ? user.displayName : ''}!
          </span> */}
      {/* <br/>{user ? user.displayName : ""}! */}
      {/* </h2> */}
      {/* <img src={bird1Img} id="bird1" alt="bird1" />
        <img src={bird2Img} id="bird2" alt="bird2" className="mt-8" />
        <img src={forestImg} id="forest" alt="forest" className="mt-10" />
        <img src={treeImg} id="tree" alt="tree" className="mt-10" /> */}
      {/* <button className='' id='home_btn' onClick={handleClick}>Explore</button> */}
      {/* <img src={rocksImg} id="rocks" alt="rocks" className="my-10" /> */}
      {/* <img src={waterImg} id='water' alt='water'/> */}

      {/* <img src={mentalImg1} id="mental1" alt="mental1" className="mt-10" /> */}
      {/* <img src={mentalImg} id="mental" alt="mental" className="mt-20" /> */}
      {/* </section> */}

      {/* <div name="question" className="flex flex-col justify-center items-center w-full h-full bg-[#344E41] text-white relative p-24">
        <h1 className="flex justify-center items-center text-9xl font-bold text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" style={{ fontSize: '5vw' }}>
          Welcome to
        </h1>
        <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1100" data-aos-offset="0" className="title">
          BE MINDFUL
        </h1>
      </div>

      {/* <ImageSlider /> */}

      <div
        className="flex flex-col justify-center items-center w-full h-full relative bg-[#1e3a8a] text-[#3A5A40]"
        style={{
          backgroundImage: 'linear-gradient(#d8f3dc, #95d5b2)',
        }}
      >
        <h1 className="flex justify-center items-center text-9xl font-bold text-center pb-4" style={{ fontSize: '5vw' }} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
          Hello, {user ? user.displayName : ''}
        </h1>
        <h1 className="flex justify-center items-center text-9xl font-bold text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000" data-aos-offset="0" style={{ fontSize: '5vw' }}>
          Welcome to
        </h1>
        <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1750" data-aos-offset="0" className="title" style={{ letterSpacing: '10px' }}>
          MINDFUL
        </h1>
        <h1 className="flex justify-center items-center text-9xl font-bold text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2500" data-aos-offset="0" style={{ fontSize: '3vw' }}>
          A safe space to reflect and improve your well-being.
        </h1>
      </div>
      <section
        name="rooms"
        className="flex flex-col justify-center items-center w-full h-full text-[#1b4332]"
        style={{
          backgroundImage: 'linear-gradient(#95d5b2, #74c69d)',
        }}
      >
        <div
          style={{
            width: '50vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <h1 className="flex justify-center items-center text-9xl font-bold text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" style={{ fontSize: '4.5vw', lineHeight: '1.25' }}>
            Explore interactive wellness rooms and tour the forum as a visitor.
          </h1>
        </div>
        <div>
          {/* <h1
            className="text-9xl font-bold text-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
            style={{ fontSize: "3.5vw" }}
          >
            Enter Mental Spa
          </h1> */}
          <div
            style={{
              width: '50vw',
              marginTop: 60,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Link to="/music">
              <div
                style={{
                  display: 'flex',
                  width: '23vw',
                  height: '24vh',
                  alignItems: 'right',
                  border: '8px solid white',
                  backgroundImage: `url("/img/meditation.jpeg")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: 55,
                  marginRight: 25,
                  color: '#DAD7CD',
                }}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0"
              >
                <h1
                  className="hover:text-[#d8572a] transition-colors duration-100"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontSize: '3.5vw',
                  }}
                >
                  Music
                </h1>
              </div>
            </Link>

            <Link to="/memoryGame">
              <div
                style={{
                  display: 'flex',
                  width: '23vw',
                  height: '24vh',
                  alignItems: 'right',
                  border: '8px solid white',
                  backgroundImage: `url("/img/gameBackground.jpeg")`,
                  backgroundPosition: 'center',
                  borderRadius: 55,
                  color: '#DAD7CD',
                }}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0"
              >
                <h1
                  className="hover:text-[#d8572a] transition-colors duration-100"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontSize: '3.5vw',
                  }}
                >
                  Game
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section
        name="question"
        className="flex flex-row justify-center items-center w-full h-full text-[#081c15]"
        style={{
          backgroundImage: 'linear-gradient(#74c69d, #52b788)',
        }}
      >
        <div className="text-9xl font-bold text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" style={{ fontSize: '3.5vw', width: '30vw', lineHeight: '1.5' }}>
          <Link className="text-[#d90429] font-bold hover:text-[#d8572a] hover:text-[4.5vw] hover:underline transition-colors duration-100" to="/register">
            Sign up
          </Link>{' '}
          to boost and refine mindfulness with a mood tracker and journal.
        </div>
        <img
          alt="homeimg"
          width="400vw"
          className="rounded-full px-[10px], border-2"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          src="https://cdn.sanity.io/images/0vv8moc6/psychtimes/05a2dd97fbedb285c5fd380a411b24847c8dcc11-1000x819.jpg?fit=crop&auto=format"
        />
        <div className="text-9xl font-bold text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" style={{ fontSize: '3.5vw', width: '30vw', lineHeight: '1.5' }}>
          With your free account, connect with other users through the forum and let your voice be heard.
        </div>
      </section>
      <section
        name="question"
        className="w-full h-full flex justify-center text-[#081c15]"
        style={{
          backgroundImage: 'linear-gradient(#52b788, #40916c)',
        }}
      >
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" className="flex flex-col justify-center items-center">
          <h1 className="flex justify-center text-center items-center text-5xl font-bold pb-4" style={{ fontSize: '3vw' }}>
            Want to learn more about Mental Health? Take the quiz!
          </h1>
          <br></br>
          <Quiz />
        </div>
      </section>
    </div>
  );
};

export default Home;
