import React from 'react'
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// link
import { Link } from 'react-scroll';

// services data
const services = [
  {
    name: 'REACT JS',
    description:
      `As a React developer, I specialize in building elegant and functional user interfaces that transform 
      ideas into interactive reality.`,
    link: 'learn more',
  },
  {
    name: 'NEXT JS',
    description:
      `As a NEXT developer, I specialize in building fast, scalable, and SEO-friendly web applications.
      Leveraging the power of server-side rendering and static site generation, 
      I deliver high-performance websites that provide an exceptional user experience.`,
    link: 'learn more',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            // className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I do.</h2>
            <h3 className='h3 max-w-[455px] mb-8'>
              I'm a web developer with Front-end Technologies, my services includes:
            </h3>
            <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true}
            >
              <button className='btn btn-sm'>
                See my work
              </button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* service list */}
            {
              services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 pb-2 h-auto mb-[38px] flex gap-10'
                    key={index}
                  >
                    <div className='max-w-[600px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-5'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    {/* <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div> */}
                  </div>
                )
              })
            }
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
