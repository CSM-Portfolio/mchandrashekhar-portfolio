import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaLaptopCode } from "react-icons/fa"
// import Pagination from "react-sanity-pagination";

import { ProjectTag, Work } from '@/typings';
import { getAllWorks, getAllprojectTags } from '@/utils/fetchPortfolioDetails ';
import Portfolio from '@/components/Portfolio';
import ProjectsSection from '../projects-section/page';
import PortfolioProject from '@/components/PortfolioProject'; CloudTag
import CloudTag from '@/components/CloudTag';

export default async function ProjectsPage ()
{
    const works = await getAllWorks();
    const projectTags = await getAllprojectTags();

    return (
        <div
            id='projects-page'
            className='w-full h-screen'           
        >
            <div
                className='mx-auto px-2 py-20 mr-10 ml-10'
                style={ {
                    backgroundImage: "linear-gradient(26deg,#fff 0 40%, #f8f9fb  0% 100%)",
                } }
                >

                <div className='h-[30vh] md:h-[60vh] relative'>
                    <Image
                        className='absolute z-1 object-cover md:object-fill'
                        fill
                        src='/assets/images/Projects-banner-original.jpg'
                        alt='Projects banner'
                    />
                </div>

                <div className="md:grid grid-cols-3 gap-8">
                    <div className='col-span-3'>
                        <div className='w-full bg-transparent flex items-center justify-center rounded-xl pb-10'>

                            <Image
                                className=''
                                width={ 150 }
                                height={ 150 }
                                src='/assets/3D-Businessman/wbg/3d_businessman_laptop_stock_photo-M-removebg-preview.png'
                                alt='3d businessman laptop'
                            />

                            <h2 className='app-types uppercase text-2xl tracking-widest text-[#F19E11]'>
                                My creative{ ' ' }
                                <span className='text-[#f12711] tracking-widest'>work</span>
                            </h2>

                        </div>
                    </div>
                </div>

                <div className="md:grid grid-cols-12 gap-8 w-full h-screen">
                    <div className="col-span-3 mr-5">
                        <div className='flex flex-row '>
                            <CloudTag projectTags={ projectTags } tagType='Projects' />
                        </div>
                    </div>

                    <div className="col-span-9">
                        <div className="grid md:grid-cols-3 gap-8 mt-10" >
                            { works?.map( ( work, index ) => (
                                <PortfolioProject key={ work._id } work={ work } />
                            ) ) }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
