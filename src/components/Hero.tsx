"use client"

import React, { Suspense } from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import Image from "next/image";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
import { a } from "@react-spring/three";
import { motion } from "framer-motion";

import Loader from '@/components/Loader';

// import { OfficeDesktopComputersCanvas } from './canvas';
// const DesktopComputer = ( args ) =>
// {
//     const gltf = useLoader( GLTFLoader, '/assets/3D-Models/desktop_computer_table_and_chair/scene.gltf' );
//     return <primitive
//         object={ gltf.scene }
//         position={ [ 0, -4.45, -3.1 ] }
//         rotation={ [ -50.28, 28.2, -0.045 ] }
//         s cale={ [ 1.4, 1.4, 1.4 ] }
//         { ...args } />;
// };

const Hero = () =>
{
    const [ text, count ] = useTypewriter( {
        words: [
            "Full Stack Architect | Developer",
            "MEAN, MERN & .NET",
            "Generative AI",
            "Web3 & Blockchain",
            "Guy-who-loves-to-travel.tsx",
            "<ButLovesToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
    } );

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 2000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1760,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section
            id='home'
            className="lg:py-24 w-full h-screen pl-20  pr-20"
            style={ {
                backgroundImage: "linear-gradient(62deg,#ecf0f3 0 50%, #fff  0% 100%)",
            } }
        >
            {/*Profile image*/ }

            <div className="grid grid-cols-1 sm:grid-cols-12">

                <div
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="w-[270px] h-[270px] md:w-[650px] md:h-[650px] lg:w-[650px] lg:h-[650px] relative mt-20 lg:mt-7 md:ml-24">
                        <Image
                            src="/assets/3D-Businessman/wbg/3d_businessman_peeking_behind_a_door-removebg.png"
                            alt="Hero section profile image"
                            fill
                            className='object-contain object-left absolute'
                        />
                    </div>
                </div>

                {/*Profile Introduction*/ }

                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-end">
                    <div className="">
                        <p className='text-2xl md:text-4xl md:ml-36 lg:ml-0 tracking-widest text-gray-600 punch  sm:py-4 md:py-10'>
                            Let&#39;s build something legendary together
                        </p>
                        <h1 className='py-4 sm:text-md text-xl lg:text-4xl lg:ml-0 md:text-[23px] text-gray-700 md:ml-48'>
                            👋 Hello, I &#39;m{ ' ' }
                            <br />
                            <span className='lg:px-14 md:px-8'>
                                Chandrashekhar Marella
                            </span>
                        </h1>
                        <h1 className='lg:px-14 md:px-8 text-gray-700 text-sm sm:text-2xl md:text-[15px] md:ml-48 lg:ml-0'>
                            Mobile &amp; Web Application Specialist
                        </h1>
                        <p className='py-4 lg:px-14 md:px-8 text-sm lg:text-lg sm:max-w-[100%] m-auto md:ml-48 lg:ml-0'>
                            <span className=''>{ text }</span>
                            <Cursor cursorStyle='_' cursorColor='#8e3a59' />
                        </p>

                        {/* my-4  w-full sm:w-[80%] */ }
                        <div className='flex items-center justify-between sm:max-w-[430px] md:max-w-[430px] m-auto py-4 px-6 md:px-8 md:ml-48 lg:ml-0'>
                            <a
                                href="https://www.linkedin.com/in/mcshekhar2280/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a
                                href="https://github.com/TheMCShekhar"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>
                            <a
                                href="https://twitter.com/TheMCShekhar"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaTwitter />
                                </div>
                            </a>
                            {/* <a
                                href="https://www.instagram.com/iamthemcshekhar/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <RiInstagramFill />
                                </div>
                            </a> */}
                            <Link href='/#contact'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero