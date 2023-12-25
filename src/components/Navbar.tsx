"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import { useRouter } from 'next/router';
import NavLogo from '../../public/assets/images/logo-no-background.png'

const Navbar = () =>
{
    const [ nav, setNav ] = useState( false );
    const [ shadow, setShadow ] = useState( false );
    const [ navBg, setNavBg ] = useState( '#ecf0f3' );
    const [ linkColor, setLinkColor ] = useState( '#1f2937' );
    
    const handleNav = () =>
    {
        setNav( !nav );
    };


    useEffect( () =>
    {
        setShadow( true );
        const handleShadow = () =>
        {
            if ( window.scrollY >= 90 )
            {
                setShadow( true );
            } else
            {
                setShadow( false );
            }

        };
        // window.addEventListener( 'scroll', handleShadow );
    }, [] );



    return (
        <div
            style={ { backgroundColor: `${ navBg }` } }
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                    : 'fixed w-full h-20 z-[100]'
            }
        >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/' >
                    <Image
                        src={ NavLogo }
                        alt='/'
                        width='75'
                        height='35'
                        className='cursor-pointer'
                    />
                </Link>
                <div>
                    <ul style={ { color: `${ linkColor }` } } className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/' >Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#skills'>Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#portfolio' >Portfolio</Link>
                        </li>
                        {/* <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#blogs'>Blogs</Link>
                        </li> */}
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */ }
                    <div
                        style={ { color: `${ linkColor }` } }
                        onClick={ handleNav }
                        className='md:hidden cursor-pointer'
                    >
                        <AiOutlineMenu size={ 25 } />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */ }
            {/* Overlay */ }
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */ }
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image
                                    src={ NavLogo }
                                    width='75'
                                    height='35'
                                    alt='/'
                                    className='cursor-pointer'
                                />
                            </Link>
                            <div
                                onClick={ handleNav }
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4 punch text-2xl'>
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={ () => setNav( false ) } className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={ () => setNav( false ) } className='py-4 text-sm'>
                                    About
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={ () => setNav( false ) } className='py-4 text-sm'>
                                    Skills
                                </li>
                            </Link>
                            <Link href='/#portfolio'>
                                <li onClick={ () => setNav( false ) } className='py-4 text-sm'>
                                    Portfolio
                                </li>
                            </Link>
                            {/* <Link href='/#blogs'>
                                <li onClick={ () => setNav( false ) } className='py-4 text-sm'>
                                    Blogs
                                </li>
                            </Link> */}
                            <Link href='/#contact'>
                                <li onClick={ () => setNav( false ) } className='py-4 text-sm'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className='mt-6'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let&#39;s Connect
                            </p>
                            <div className='flex items-center justify-between my-4  w-full sm:w-[80%]'>
                                <a
                                    href="https://www.linkedin.com/in/mcshekhar2280/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/TheMCShekhar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <a
                                    href="https://twitter.com/TheMCShekhar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaTwitter />
                                    </div>
                                </a>
                                <a
                                    href="/#contact"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>                                    
                                        <AiOutlineMail onClick={ () => setNav( false ) } />
                                    </div>
                                </a>
                                {/* <a
                                    href="https://www.instagram.com/iamthemcshekhar/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <RiInstagramFill />
                                    </div>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;