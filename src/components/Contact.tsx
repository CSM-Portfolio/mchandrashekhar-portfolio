"use client";

import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { motion } from "framer-motion";

import NavLogo from '../../public/assets/images/logo-no-background.png'

const Contact = () =>
{
  return (
    <>
      <div
        id="contact"
        className="w-full lg:h-screen mt-[750px] lg:mt-[0px]"
        style={ {
          backgroundImage: "linear-gradient(62deg,#fff 0 50%, #fff 0% 100%)",
        } }
      >
        <div className="max-w-[1240px] m-auto px-2 py-24 w-full">
          <div className="md:grid grid-cols-3 gap-8">
            <div className="col-span-3">
              <div className="w-full bg-transparent flex items-center justify-center md:justify-end rounded-xl pb-0">
                <Image
                  className=""
                  width={ 180 }
                  height={ 180 }
                  src="/assets/3D-Businessman/wbg/3d_businessman_pointing_to_empty_wall_-_M-removebg-preview.png"
                  alt="3d businessman pointing to empty wall"
                />
                <h2 className='app-types uppercase text-2xl tracking-widest text-[#F19E11]'>
                  Get In{ ' ' }
                  <span className='text-[#f12711] tracking-widest'>Touch</span>
                </h2>

              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 sm:col-reverse" >

            {/*Left*/ }
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2"> Name </label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" > Phone Number </label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" > Email </label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" > Subject </label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" > Message </label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={ 4 }>
                    </textarea>
                  </div>

                  <button className="w-full p-4 text-gray-100 mt-4 cursor-pointer text-xl">Send Message</button>
                </form>
              </div>
            </div>

            {/*Right*/ }
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <h2 className="py-5  text-3xl  text-[#F79947]">Chandrashekhar Marella</h2>
                  <p className="text-sm font-semibold text-[#945b2a]">Generative AI, Web3 & Blockchain</p>
                  <p className="text-sm font-semibold text-[#945b2a]">Full Stack (MEAN, MERN, .NET)</p>
                </div>
                <div>

                  <div className='flex justify-start items-center' >
                    <p className="py-4 font-semibold"> Let&apos;s talk.</p>
                    <Image
                      className=""
                      width={ 180 }
                      height={ 180 }
                      src="/assets/images/handshake-icon-concept-partnership-agreement-removebg-preview.png"
                      alt="lets talk"
                    />

                  </div>
                  <p className="uppercase font-semibold"> Connect with me </p>
                  <div>
                    <div className="flex items-center justify-between py-5">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a
                          href="https://www.linkedin.com/in/mcshekhar2280/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a
                          href="https://github.com/TheMCShekhar"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a
                          href="https://twitter.com/TheMCShekhar"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a
                          href="https://www.instagram.com/iamthemcshekhar/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiInstagramFill />
                        </a>
                      </div>

                      <Link href='/resume'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <BsFillPersonLinesFill />
                        </div>
                      </Link>

                    </div>
                  </div>
                  <div className="flex items-end justify-end pt-15">
                    <Link href='/'>
                      <Image
                        src={ NavLogo }
                        width='75'
                        height='35'
                        alt='/'
                        className='cursor-pointer'
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-center items-end p-2 w-full uppercase">
                    <p className="text-sm font-semibold">@2023 | CHANDRASHEKHAR MARELLA</p>
                    <p className="text-sm font-semibold">All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='flex justify-center py-12' >
            <Link href='/#home' >
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={ 30 }
                />
              </div>
            </Link>
          </div>
        </div>



      </div>
    </>
  );

}

export default Contact;