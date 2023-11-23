import React from 'react'
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// icons
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!
            </h2>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-32'>
            Contact me via
            {/* email */}
            <div className='flex items-center gap-6 '>
              <MdEmail />
              <span className='text-accent font-medium tracking-wide'>
                umer.work.96@gmail.com
              </span>
            </div>
            {/* Phone Number */}
            <div className='flex items-center gap-6'>
              <FaPhoneSquareAlt />
              <span className='text-accent font-medium tracking-wide'>
                +92 315 7858775
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
