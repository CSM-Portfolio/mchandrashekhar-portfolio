"use client";

import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ExperiencesData } from "@/utils/data";

const Experiences = () =>
{
    return (
        <section
            id="experiences"       
            style={ {
                backgroundImage: "linear-gradient(90deg, #f8f9fb  0 50%, #fff  0% 100%)",
            }
            }
        >
            <div className='max-w-screen-xl m-auto md:grid grid-cols-1'>
                <div className='mt-12 flex'>
                    <VerticalTimeline lineColor="">
                        { ExperiencesData.map( ( experience, index ) => (
                            <VerticalTimelineElement
                                visible={ true }
                                key={ experience.company_name }
                                date={ experience.date }
                                iconStyle={ { background: experience.iconBg } }
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <Image
                                            src={ experience.icon }
                                            alt={ experience.company_name }
                                            className='object-contain'
                                            width={ 50 }
                                            height={ 50 }
                                        />
                                    </div>
                                }
                                contentStyle={ {
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "0 20px 18px rgba(14,21,47,0.25)",
                                    background: "#fff",
                                } }
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        { experience.title }
                                    </h3>
                                    <p
                                        className='text-black-500 font-medium text-base'
                                        style={ { margin: 0 } }
                                    >
                                        { experience.company_name }
                                    </p>
                                </div>

                                {/* <ul className='my-5 list-disc ml-5 space-y-2'>
                                    { experience.points.map( ( point, index ) => (
                                        <li
                                            key={ `experience-point-${ index }` }
                                            className='text-black-500/50 font-normal pl-1 text-sm'
                                        >
                                            { point }
                                        </li>
                                    ) ) }
                                </ul> */}
                            </VerticalTimelineElement>
                        ) ) }
                    </VerticalTimeline>
                </div>

            </div>
        </section>
    )
}

export default Experiences