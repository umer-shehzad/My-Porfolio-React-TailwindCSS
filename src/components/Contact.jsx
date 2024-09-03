import React from 'react'
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// icons
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";

import GmailIcon from '../assets/icons8-gmail.svg';
import LinkedInIcon from '../assets/icons8-linkedin.svg';

const Contact = () => {
  const phoneNumber = "+92 315 7858775";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section className='py-16 min-h-[100vh] lg:section' id='contact'>
      <div className="container ml-20 mt-20 lg:mx-auto">
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
            <p className='text-3xl mb-8'>Contact me via</p>
            {/* email */}
            <div className='flex items-center gap-6 mb-2'>
              <MdEmail />
              <div className='flex gap-3'>
                <a href="mailto:umer.work.96@gmail.com" className="text-accent font-medium tracking-wide">
                  <img src={GmailIcon} alt="Gmail Icon" className="inline-block w-9 h-9" />
                </a>
                <a href="https://www.linkedin.com/in/umer-shehzad/">
                  <img src={LinkedInIcon} alt="Gmail Icon" className="inline-block w-9 h-9" />
                </a>
              </div>
            </div>
            {/* Phone Number */}
            <div className='flex items-center gap-6'>
              <FaPhoneSquareAlt />
              <a href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='text-green-500 w-9 h-9' />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
