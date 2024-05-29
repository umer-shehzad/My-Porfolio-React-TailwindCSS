import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// link
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[700px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Front-end developer skilled in: </h3>
            <p className='mb-6'>React | NEXT | Hooks | Redux | MUI | Bootstrap | Tailwind | Responsive Design | 
            API Integration | Vercel | Firebase | HTML | CSS | JavaScript | Node | Express | MongoDB | MqSQL 
            | GCP | Python  
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView
                    ? <CountUp start={0} end={1} duration={10} />
                    : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView
                    ? <CountUp start={0} end={9} duration={5} />
                    : null
                  }
                  {/* k+ */}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Project <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView
                    ? <CountUp start={0} end={2} duration={10} />
                    : null
                  }
                  {/* k+ */}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 justify-end items-center'>
              <Link
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
              >
                <button className='btn btn-lg'>
                  Contact me
                </button>
              </Link>
              {/* <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
