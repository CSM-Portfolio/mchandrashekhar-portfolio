"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaHandPointLeft } from "react-icons/fa";
import Link from 'next/link';

import styles from './About.module.css';

const About = () =>
{

  return (
    <div id='about'>

      {/* About */ }
      <div      
        className="pt-[100px] pb-[100px] lg:pb-[600px] relative lg:h-[800px]"
        style={ {
          backgroundImage: "linear-gradient(62deg,#fff 0 50%, #f8f9fb  0% 100%)",
        } }
      >

        <div className='max-w-screen-xl m-auto md:grid grid-cols-3 gap-8'>

          <div className='col-span-2'>

            <div className='w-full bg-transparent flex items-center justify-center md:justify-start rounded-xl pb-5'>
              <Image
                className=''
                width={ 280 }
                height={ 280 }
                src='/assets/3D-Businessman/wbg/3d_businessman_sitting_at_desk_-_M-removebg-preview.png'
                alt='3d businessman sitting at desk'
              />
              <h2 className='app-types uppercase text-2xl tracking-widest text-[#F19E11] col-span-2'>
                About <span className='text-[#f12711] tracking-widest'>Me</span>
              </h2>
            </div>

            <p className='px-5 md:px-5 lg:px-0 py-2 text-gray-600 break-words'>
              With over 16 years of experience, I specialize in managing end-to-end application development and project management. My core strengths include in-depth client requirement analysis, crafting tailored solutions, designing and developing robust Full Stack applications. I am well-versed in both SQL and No-SQL databases, and I&apos;m actively exploring leading-edge technologies such as Generative AI and Blockchain.
            </p>
            <p className='px-5 md:px-5 lg:px-0 py-2 text-gray-600 break-words'>
              In the realm of DevOps, I possess the ability to automate and streamline development and deployment processes, utilizing my expertise in a variety of DevOps tools and technologies, including Docker, Kubernetes, and Jenkins.
            </p>
            <p className='px-5 md:px-5 lg:px-0 py-2 text-gray-600 break-words'>
              Building and deploying Decentralized Applications (dApps) on Ethereum. Smart contract development using technologies like Ethereum and Solidity.
            </p>
            <p className='px-5 md:px-5 lg:px-0 py-2 text-gray-600 break-words'>
              Development of Generative AI Applications enabling Large Language Models (LLMs) to interact with external systems like private knowledge repositories, databases, applications, APIs etc.
            </p>
            <p className='px-5 md:px-5 lg:px-0 py-2 text-gray-600 flex items-center'>
              Check out my latest web software development portfolio projects{ ' ' }
              <span className='underline cursor-pointer pl-2 pr-2 text-[#5651e5]'>
                <Link href='/#portfolio'>
                  here
                </Link>
              </span>
              <FaHandPointLeft className='text-2xl ' />
            </p>

            {/* <div className='flex justify-end items-center w-full sm:w-[71%]'>
              <Image
                className=''
                width={ 50 }
                height={ 50 }
                src='/assets/3D-Businessman/wbg/3d-render-pointing-hand-gesture-palm-with-finger-removebg-preview.png'
                alt='3d businessman sitting at desk'
              />
            </div> */}

          </div>

          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center  p-2 hover:scale-105 ease-in duration-300 mt-28'>
            <Image
              className='rounded-xl'
              width={ 500 }
              height={ 400 }
              src='/assets/images/ben-kolde-bs2Ba7t69mM-unsplash.jpg'
              alt='Laptop with a cofee mug'
            />
          </div>

        </div>
      </div>

      {/* Experiences */ }
      {/* <Experiences /> */}
    </div>
  );
}

export default About;