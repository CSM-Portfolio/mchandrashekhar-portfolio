import React from 'react';

import Image from "next/image";
import Link from 'next/link';
import { RiRadioButtonFill, RiArrowGoBackFill } from 'react-icons/ri';

import urlFor from '@/lib/urlFor';
import { Work } from '@/typings';

interface Props
{
    work: Work;
}

const PortfolioProjectDetails = ( { work }: Props ) =>
{
    return (
        <>      
            <div className='w-full mb-20' >
                <div className='w-screen h-[50vh] relative '>
                    <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                    <Image
                        className='absolute z-1'
                        fill
                        objectFit='cover'
                        src={ urlFor( work?.mainImage?.asset?._ref )?.url() }
                        alt={ work?.projectName }
                    />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2' >
                        <h2 className='py-2' > { work?.projectName }</h2>
                    </div>
                </div>

                <div className="md:grid grid-cols-3 gap-8">
                    <div className='col-span-3'>
                        <div className='w-full bg-transparent flex items-center justify-center rounded-xl pb-10'>
                            <h2 className='app-types uppercase text-2xl tracking-widest text-[#F19E11]' >
                                Project{ ' ' }
                                <span className='text-[#f12711] tracking-widest' > Details</span>
                            </h2>

                            <Image
                                className=''
                                width={ 120 }
                                height={ 120 }
                                src='/assets/3D-Businessman/3d businessman standing and holding laptop-M.jpg'
                                alt='3d businessman sitting in round chair'
                            />
                        </div>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-0 ' >

                    <div className='col-span-4' >
                        <Link href='/#portfolio' className="">
                            <p className='underline cursor-pointer flex items-center justify-start font-bold text-xl' > <RiArrowGoBackFill className='pr-1' /> Back </p>
                        </Link>

                        <p className="text-start font-bold pb-2 text-3xl pt-10"> { work?.projectName } </p>
                        <h2 className="text-start font-bold pb-2 text-xl pt-4"> Overview </h2>

                        <p> { work?.description } </p>

                        {/* <p className='text-start font-bold pb-2 mt-8 text-xl' > Architecture Diagram </p>
                        <div className='m-auto'>
                            <Image
                                className=''
                                width={ 650 }
                                height={ 650 }
                                src={ urlFor( work?.architectureDiagram?.asset?._ref )?.url() }
                                alt={ work?.projectName }
                            />
                        </div> */}

                        {/* <p className='text-start font-bold pb-2 mt-4  text-xl' > Architecture Description </p>
                        <p>{ work?.architectureDescription }</p> */}

                    </div>

                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 max-h-screen'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2  text-xl' > Technologies </p>
                            <div className='grid grid-cols-3 md:grid-cols-1' >
                                { work?.technologies?.map( ( technology, index ) => (
                                    <p className='text-gray-600 py-2 flex items-center' key={ technology._id } >
                                        <RiRadioButtonFill className='pr-1' /> { technology.title }
                                    </p>
                                ) ) }
                            </div>
                        </div>

                        <div className='p-2'>
                            <p className='text-center font-bold pb-2  text-xl' > Tags </p>
                            <div className='grid grid-cols-3 md:grid-cols-1' >
                                {
                                    work.projectTags?.map( ( tag, index ) => (
                                        <p className='text-gray-600 py-2 flex items-center' key={ tag._id } >
                                            <RiRadioButtonFill className='pr-1' /> { tag.title }
                                        </p>
                                    ) )
                                }
                            </div>
                        </div>


                        <div className="flex items-center justify-center">
                            <a
                                href={ work?.codeLink }
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-6 py-1 mt-4 mr-2' > Code </button>
                            </a>
                            <a
                                href={ work?.projectLink }
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-6 py-1 mt-4' > Demo </button>
                            </a>
                        </div>

                    </div>


                    <Link href='/#portfolio' className="">
                        <p className='underline cursor-pointer flex items-center justify-start font-bold text-xl' > <RiArrowGoBackFill className='pr-1' /> Back </p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PortfolioProjectDetails;