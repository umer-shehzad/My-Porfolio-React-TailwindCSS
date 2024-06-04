import { useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { projects } from '../constants/ProjectsData';

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < projects.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12'
        >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-4 w-full lg:w-[700px] h-[260px] lg:h-[350px]'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <LazyLoadImage
                    className='group-hover:scale-125 transition-all duration-500 w-full lg:w-[700px] h-[260px] lg:h-[350px] object-fill'
                    alt={projects[currentPage].title}
                    src={projects[currentPage].img}
                    effect="blur"
                    placeholder={
                        <div className='flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black/70 text-white z-50'>
                            <FaSpinner className="animate-spin text-4xl" />
                        </div>
                    }
                />
                {/* pretitle */}
                <div
                    className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50'
                >
                    <span className='text-gradient'>
                        {projects[currentPage].pretitle}
                    </span>
                </div>
                {/* title */}
                <div
                    className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50'
                >
                    <span className='text-2xl text-white'>{projects[currentPage].title}</span>
                </div>
                {/* Links */}
                <div
                    className='absolute -bottom-full left-12 group-hover:bottom-0 transition-all duration-700 z-50'
                >
                    <span className='flex gap-6 mb-[32px]'>
                        {/* Github Link */}
                        {projects[currentPage].githubLink && (
                            <a
                                href={projects[currentPage].githubLink}
                                target='_blank'
                                className='text-gradient text-md flex justify-center mt-2'
                                rel='noopener noreferrer'
                            >
                                learn more
                            </a>
                        )}
                        {/* Live Link */}
                        {projects[currentPage].liveLink && (
                            <a
                                href={projects[currentPage].liveLink}
                                target='_blank'
                                className='btn w-9 h-9 flex justify-center items-center'
                            >
                                <BsArrowUpRight />
                            </a>
                        )}
                    </span>
                </div>
                {/* Pagination Buttons */}
                <div className="absolute top-1/2 left-2 lg:left-4 transform -translate-y-1/2 z-50">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className={`btn p-1 lg:p-2 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <BsArrowLeft className="text-2xl lg:text-3xl text-white" />
                    </button>
                </div>
                <div className="absolute top-1/2 right-2 lg:right-4 transform -translate-y-1/2 z-50">
                    <button
                        onClick={handleNext}
                        disabled={currentPage === projects.length - 1}
                        className={`btn p-1 lg:p-2 ${currentPage === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <BsArrowRight className="text-2xl lg:text-3xl text-white" />
                    </button>
                </div>
            </div >
        </motion.div >
    );
};

export default Projects;
