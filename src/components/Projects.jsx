import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// variant
import { fadeIn } from '../variants';

import OqvicFlood from '../assets/oqvic-flood.png';
import ExerciseTracker from '../assets/exercise-tracker.png';
import EcommerceDashboard from '../assets/ecommerce-dashboard.png';
import LittleLemon from '../assets/little-lemon.png';
import TMS from '../assets/task-management-system.png';
import GlobalGuide from '../assets/global-guide.png';
import HumsafarPortfolio from '../assets/humsafar-portfolio.png';

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const projects = [
        {
            img: GlobalGuide,
            pretitle: 'NEXT APP',
            title: 'Global Guide',
            liveLink: 'https://global-guide-next.vercel.app/',
        },
        {
            img: HumsafarPortfolio,
            pretitle: 'HTML CSS',
            title: 'Humsafar Landing Page',
            githubLink: 'https://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@github.com/app-humsafar/landingPage.git',
            liveLink: 'https://humsafar-portfolio.vercel.app/',
        },
        {
            img: TMS,
            pretitle: 'REACT APP',
            title: 'Task Management System',
            liveLink: 'https://task-managemment-system-react.vercel.app/',
        },
        {
            img: LittleLemon,
            pretitle: 'REACT APP',
            title: 'Little Lemon Restaurant',
            githubLink: 'https://github.com/umer-shehzad/Little-Lemon-Restaurant-React',
            liveLink: 'https://little-lemon-restaurant-react.vercel.app/',
        },
        {
            img: OqvicFlood,
            pretitle: 'REACT APP',
            title: 'Oqvic Flood',
            githubLink: 'https://github.com/umer-shehzad/Oqvic-Flood-App',
            liveLink: 'https://oqvic-flood.web.app/',
        },
        {
            img: ExerciseTracker,
            pretitle: 'MERN APP',
            title: 'Exercise Tracker',
            githubLink: 'https://github.com/umer-shehzad/Exercise-Tracker-MERN-APP',
        },
        {
            img: EcommerceDashboard,
            pretitle: 'MERN APP',
            title: 'Ecommerce Dashboard',
            githubLink: 'https://github.com/umer-shehzad/e-commerce-dashboard-MERN',
        },
    ];

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
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-4'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                    className='group-hover:scale-125 transition-all duration-500'
                    src={projects[currentPage].img} alt={projects[currentPage].title}
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
                            < a
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
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className={`btn ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <BsArrowLeft className="text-2xl text-white" />
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50">
                    <button
                        onClick={handleNext}
                        disabled={currentPage === projects.length - 1}
                        className={`btn ${currentPage === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <BsArrowRight className="text-2xl text-white" />
                    </button>
                </div>
            </div >
        </motion.div >
    );
};

export default Projects;
