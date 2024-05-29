import React from 'react'
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// Projects component
import Projects from './Projects';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto my-10 lg:my-auto">
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
                My Work.
              </h2>
              <p className='max-w-sm mb-6'>
                In my projects, I spreadheaded the development of a cutting edge web application.
                I'm excited to share my work, that shows my commitment to innovation and my passion for delivering
                solutions.
              </p>
              <a href='https://github.com/umer-shehzad/' target='_blank'>
                <button className='btn btn-sm'>View all projects</button>
              </a>
            </div>
          </motion.div>
          
          {/* projects */}
          <Projects />
        </div>
      </div>
    </section>
  )
}

export default Work
