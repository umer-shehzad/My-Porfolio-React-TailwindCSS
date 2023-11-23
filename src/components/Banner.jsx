import React from 'react'
// images
// import Image from '../assets/avatar.svg';
// import Image from '../assets/my-pic.png';
// import Image from '../assets/my-pic1.png';
import Image from '../assets/my-pic-remove-bg.png';
// icons
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';


const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[50px] font-bold leading-[1] lg:text-[100px]'>
              Umer <span>Shehzad</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[32px] lg:text-[44px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'React Developer',
                2000,
                'MERN Developer',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-5 max-w-lg mx-auto lg:mx-0'>
               I'm a dedicated Web Developer with a passion for crafting interactive and user-friendly websites. 
               Welcome to my portfolio where ideas come to life in pixels and code.
            </motion.p>

            {/* <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex items-center gap-x-6 max-w-max mx-auto lg:mx-0 mb-12'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div> */}

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-5'>
              <a href="https://github.com/umer-shehzad/">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/umer-shehzad/">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[270p] lg:max-w-[450px] lg:ps-10 lg:pb-10'>
            <img src={Image} alt='my-pic'/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
