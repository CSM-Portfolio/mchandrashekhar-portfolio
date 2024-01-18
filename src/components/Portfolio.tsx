import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import PortfolioProject from './PortfolioProject';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { FaLaptopCode } from "react-icons/fa";

import { Work, ProjectTag } from '../typings';

type Props = {
  works: Work[];
  projectTags: ProjectTag[];
};

export default function Portfolio ( { works, projectTags }: Props )
{

  return (
      <section
      id="portfolio"
      className="w-full mt-[900px] md:mt-[600px]"
      style={ {
        backgroundImage: "linear-gradient(26deg,#fff 0 40%, #f8f9fb  0% 100%)",
      } }  
    >
      <div className="mx-auto px-16 py-16" >

        <div className="md:grid grid-cols-3 gap-8">
          <div className='col-span-3'>
            <div className='w-full bg-transparent flex flex-col md:flex-row items-center justify-center rounded-xl pb-10'>

              <Image
                className=''
                width={ 150 }
                height={ 150 }
                src='/assets/3D-Businessman/wbg/3d_businessman_sitting_in_round_chair_-_M-removebg-preview.png'
                alt='3d businessman sitting in round chair'
              />

              <h2 className='app-types uppercase text-2xl tracking-widest text-[#F19E11]'>
                What I&apos;ve{ ' ' }
                <span className='text-[#f12711] tracking-widest'>Built</span>
              </h2>

            </div>
          </div>
        </div>

        {/* <div className='flex flex-row items-center justify-center flex-wrap'>
          { projectTags.map( ( projectTag, index ) => (
            <div
              className='font-poppins font-semibold  p-2 text-base bg-transparent text-[#000] rounded-3xl tracking-widest cursor-pointer hover:bg-[#f12711] hover:text-[#fff]'
              key={ index }>
              { projectTag.title }
            </div>
          ) ) }
        </div> */}

        <div className="grid md:grid-cols-4 gap-8 mt-10" >
          { works.filter( ( work, index ) => index < 4 ).map( ( work, index ) => (
            <PortfolioProject key={ work._id } work={ work } />
          ) ) }
        </div>

        {/* <Link href='/projects/projects-page' className="flex items-center justify-end mt-10">
          <p className='underline cursor-pointer flex items-center justify-start font-bold text-xl' > <FaLaptopCode className='pr-2 text-4xl' /> View All </p>
        </Link> */}

      </div>
    </section>
  )
}

