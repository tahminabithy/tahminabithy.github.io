import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner'
import Skills from './Skills/Skills'
import Project from '../../Components/Project/Project';
import Heading from '../../Components/Heading/Heading';
import { FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Experience from './Experience/Experience';
import { useTranslation } from 'react-i18next';
export default function Home() {
    const [t] = useTranslation();
    const projects = t('projects.project', { returnObjects: true })

    return (
        <div className=''>

            <Banner />

            <Skills />

            {/* ---------projects ------------ */}
            <section className='my-12 md:my-20'>
                <div className='mb-12 lg:mb-24 text-center'>
                    <Heading title={t('projects.title')} />
                </div>
                {projects?.length > 0 ? (
                    projects.slice(0, 2).map((project, index) => (
                        <Project key={index} project={project} index={index} />

                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
                <Link to="/projects">
                    <div className='flex justify-end items-center px-2 md:px-14 lg:px-24'>
                        <button className='flex items-center gap-2 border-2 border-baseColor dark:border-gray-400 dark:text-white text-baseColor hover:dark:border-baseColor hover:bg-baseColor hover:text-white px-8 py-2 rounded-full hover:bg-opacity-90 transition duration-300 mt-6 md:mt-12 md:text-xl md:font-bold'>
                            {t('projects.project-btn')} <FaPlayCircle />
                        </button>
                    </div>

                </Link>
            </section>
            {/* -------------project end ------------ */}
            <Experience />
            {/* <p>contact</p>
            <p>textomonial</p> */}


        </div>
    )
}
