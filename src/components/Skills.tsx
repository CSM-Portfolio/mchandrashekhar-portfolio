"use client";

import React, { useState } from "react";
import Image from "next/image";

import { AboutData } from "@/utils/data";
import urlFor from '@/lib/urlFor';
import { Skill, SkillTag } from '@/typings';

type Props = {
    skills: Skill[];
    skillTags: SkillTag[];
};

const Skills = ( { skills, skillTags }: Props ) =>
{
    const [ filterSkills, setFilterSkills ] = useState( [] );
    const [ activeFilter, setActiveFilter ] = useState( 'Frontend' );

    const [ isFlipped, setIsFlipped ] = useState( false );
    const [ isFaded, setIsFaded ] = useState( false );
    const [ selectedIndex, setSelectedIndex ] = useState( 0 );
    const [ mapData, setMapData ] = useState( AboutData[ 0 ] );

    const myFunctions = ( data: React.SetStateAction<{ count: number; title: string; img: string; array: string[]; }> ) =>
    {
        setIsFlipped( false );
        setIsFaded( false );
        setMapData( data );
    };

    const handleCardClick = ( data: { count: number; title: string; img: string; array: string[]; }, index: React.SetStateAction<number> ) =>
    {
        setIsFlipped( true );
        setIsFaded( true );
        setSelectedIndex( index );

        setTimeout( () => myFunctions( data ), 600 );
    };

    const HandleNext = () =>
    {
        if ( selectedIndex < 5 )
        {
            handleCardClick( AboutData[ selectedIndex + 1 ], selectedIndex + 1 );
        } else
        {
            handleCardClick( AboutData[ 0 ], 0 );
        }
    };
    const HandlePrev = () =>
    {
        if ( selectedIndex !== 0 )
        {
            handleCardClick( AboutData[ selectedIndex - 1 ], selectedIndex - 1 );
        } else
        {
            handleCardClick( AboutData[ 5 ], 5 );
        }
    };

    // const handleSkillFilter = (
    //     skilltag
    // ) =>
    // {

    //     console.log( 'On Click: ' + skilltag );
    //     setActiveFilter( skilltag );

    //     setFilterSkills(
    //         setFilterSkills(skills.filter(skilltag) => skilltag.includes(skilltag))
    //     );
    // };

    return (
        <>
            <section
                id='skills'
                className='lg:py-24 w-full h-screen pl-10  pr-10'
            >
                <div className='mx-auto flex flex-col justify-center'>
                    <div className='md:grid grid-cols-3 gap-8'>
                        <div className='col-span-3'>
                            <div className='w-full bg-transparent flex flex-col md:flex-row items-center justify-center rounded-xl pb-10'>
                                <h2 className='app-types uppercase text-2xl tracking-widest text-[#F19E11]'>
                                    My Key{ ' ' }
                                    <span className='text-[#f12711] tracking-widest'>Skills</span>
                                </h2>
                                <Image
                                    className=''
                                    width={ 130 }
                                    height={ 130 }
                                    src='/assets/3D-Businessman/3d successful businessman on his knees - M.jpg'
                                    alt='3d successful businessman on his knees'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Summary Cards */ }

                <div className='mt-32'>
                    <div
                        style={ {
                            backgroundImage: "linear-gradient(45deg, #ecf0f3  70%,#f12711 30%)",
                            width: "100%",
                        } }
                    >
                        {/* className="lg:mt-[550px]" */ }
                        <section className="container flex  flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px sm:mt-] transform translate-y-[-100px]">
                            <div className=" hidden sm:flex w-full sm:w-1/2 lg:w-7/12">
                                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10">
                                    { AboutData.map( ( item, index ) => (
                                        <a key={ index }
                                            onClick={ () => handleCardClick( item, index ) }
                                            style={ { boxShadow: "#48AFDE -5px  10px 20px 0px" } }
                                            className={ `relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center  items-center ${ selectedIndex == index
                                                ? " -translate-y-2 bg-[#F19E11]"
                                                : "hover:bg-[#F19E11] hover:shadow-xl hover:-translate-y-2 bg-white"
                                                }` }
                                        >
                                            {/* <div className="w-16 h-16 sm:w-10 sm:h-10  lg:w-16 lg:h-16">
                                                <Image
                                                    height={ 100 }
                                                    width={ 100 }
                                                    src={ item.img } alt="" />
                                            </div> */}
                                            <h4
                                                className={ `text-center text-sm lg:text-xl transition-colors duration-500 group-hover:text-white text-[#47626D] mt-3 ${ selectedIndex === index ? "text-white" : ""
                                                    }` }
                                            >
                                                { item.title }
                                            </h4>

                                            <div
                                                className={ `absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#F19E11] flex justify-center items-center font-bold text-white text-xl  ${ selectedIndex === index
                                                    ? "opacity-100 rotate-12"
                                                    : "group-hover:rotate-12"
                                                    }` }
                                            >
                                                { item.count }
                                            </div>
                                        </a>
                                    ) ) }
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10">
                                <div className="bg-white  lg:mt-0 mt-10 rounded-xl p-10 xl:p-12 shadow-accent-color relative">
                                    <section
                                        className={ `fade-left overflow-hidden ${ isFaded ? "fade-out" : ""
                                            }` }
                                    >
                                        <p
                                            className={ `text-[#47626D] text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100 undefined undefined` }
                                        >
                                            My skills in
                                        </p>
                                        <h2 className=" text-[#47626D] text-3xl sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100 undefined undefined">
                                            { mapData?.title }
                                        </h2>

                                        <ul
                                            className={ `font-[300] list-disc text-[#47626D] ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform  opacity-100 undefined undefined` }
                                        >
                                            { mapData?.array?.map( ( obj ) => (
                                                <li key={ obj } className="mb-2">{ obj }</li>
                                            ) ) }
                                        </ul>
                                    </section>
                                    <div
                                        className={ `absolute perspective-500 -top-7 sm:top-30 right-0 sm:-right-20 card ${ isFlipped ? "flipped" : ""
                                            }` }
                                    >
                                        <div className="card-inner">
                                            <div className="rounded-2xl cursor-pointer  text-7xl  xl:text-9xl text-white bg-[#F19E11]  p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48  transform transition duration-500 transform-preserve -rotate-6 transform-preserve">
                                                <span className="text-2xl xl:text-6xl mr-2 sm:mr-3">*</span>
                                                { mapData.count }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute right-10  -bottom-5 flex">
                                        <a
                                            onClick={ HandlePrev }
                                            className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#F19E11]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-6 h-6 text-white"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 19l-7-7 7-7"
                                                ></path>
                                            </svg>
                                        </a>
                                        <a
                                            onClick={ HandleNext }
                                            className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#F19E11]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-6 h-6 text-white"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 5l7 7-7 7"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Skills Card */ }
                <div
                    className=''
                >
                    <div className="max-w-full mx-auto px-2 py-6">
                        {/* <div className='flex flex-row items-center justify-center flex-wrap'>
                            { skillTags.map( ( SkillTag, index ) => (
                                <div
                                    className='font-poppins font-semibold mt-10 p-2 text-base bg-white text-[#000] rounded-3xl tracking-widest cursor-pointer hover:bg-[#F19E11] hover:text-[#fff]'
                                    key={ index } onClick={ () => handleSkillFilter( SkillTag._id ) }>
                                    { SkillTag.title }
                                </div>
                            ) ) }
                        </div> */}

                        <div className='grid grid-cols-2 md:grid-cols-5 gap-2 mt-10'>
                            { skills.map( ( skill, index ) => (
                                // eslint-disable-next-line react/jsx-key
                                <div key={ index } className='mr-10 ml-10 p-4 w-9/12 md:w-5/6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                                    <div className='grid md:grid-cols-5 justify-center items-center '>
                                        <div className=''>
                                            <Image
                                                className=''
                                                width={ 40 }
                                                height={ 40 }
                                                src={ urlFor( skill.icon.asset._ref ).url() }
                                                alt={ skill.name }
                                            />
                                        </div>
                                        <div className='hidden md:block flex flex-col md:col-span-4 md:pl-2 items-center justify-center text-xs'>
                                            <h3>{ skill.name }</h3>
                                        </div>
                                    </div>
                                </div>
                            ) ) }
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;