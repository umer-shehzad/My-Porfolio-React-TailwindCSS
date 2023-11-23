import React from 'react'
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// Img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto mt-12">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-6'>
                In my latest projects, I spreadheaded the development of a cutting edge web application.
                I'm excited to share my work, that shows my commitment to innovation and my passion for delivering
                solutions.
              </p>
              <a href='https://github.com/umer-shehzad/' target='_blank'>
                <button className='btn btn-sm'>View all projects</button>
              </a>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1} alt=''/>
              {/* pretitle */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 z-50'
              >
                <span className='text-gradient'>
                  REACT APP
                </span>
              </div>
              {/* title */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'
              >
                <span className='text-3xl text-white'>
                  Oqvic Flood
                </span>
              </div>
              {/* Links */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-0 transition-all duration-700 z-50'
              >
                <span className='flex gap-10'>
                  {/* Live Link */}
                  <a
                    href='https://oqvic-flood.web.app/'
                    target='_blank'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <BsArrowUpRight />
                  </a>
                  {/* Github Repo Link */}
                  <a
                    href='https://github.com/umer-shehzad/Oqvic-Flood-App'
                    target='_blank'
                    className='text-gradient text-sm flex justify-center mt-2'>
                    learn more
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-4'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2} alt='' />
              {/* pretitle */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 z-50'
              >
                <span className='text-gradient'>
                  MERN APP
                </span>
              </div>
              {/* title */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'
              >
                <span className='text-3xl text-white'>Exercise Tracker</span>
              </div>
              {/* Links */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'
              >
                <span className=''>
                  {/* Live Link */}
                  {/* <a
                    href='https://oqvic-flood.web.app/'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <BsArrowUpRight />
                  </a> */}
                  {/* Github Repo Link */}
                  <a
                    href='https://github.com/umer-shehzad/Exercise-Tracker-MERN-APP'
                    target='_blank'
                    className='text-gradient text-sm flex justify-center mt-2'>
                    learn more
                  </a>
                </span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3} alt='' />
              {/* pretitle */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 z-50'
              >
                <span className='text-gradient'>
                  MERN APP
                </span>
              </div>
              {/* title */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'
              >
                <span className='text-3xl text-white'>Ecommerce Dashboard</span>
              </div>
              {/* Links */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'
              >
                <span className='flex gap-10'>
                  {/* Live Link */}
                  {/* <a
                    href='https://oqvic-flood.web.app/'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <BsArrowUpRight />
                  </a> */}
                  {/* Github Repo Link */}
                  <a
                    href='https://github.com/umer-shehzad/e-commerce-dashboard-MERN'
                    target='_blank'
                    className='text-gradient text-sm flex justify-center mt-2'>
                    learn more
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
