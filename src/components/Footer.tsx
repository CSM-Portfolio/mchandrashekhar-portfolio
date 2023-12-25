import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import NavLogo from '../../public/assets/images/logo-no-background.png'

const Footer = () =>
{
  return (
    <footer className="bg-[#ecf0f3] mt-[-80px] lg:mt-[550px]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="flex flex-col">
          <div>
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
          <div>
            <p className="text-sm font-semibold pt-5">@2023 | CHANDRASHEKHAR MARELLA</p>
            <p className="text-sm font-semibold">All rights reserved</p>
          </div>
          <div className='flex items-center justify-between w-full sm:w-[25%] pt-5'>
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
              href="https://www.instagram.com/iamthemcshekhar/"
              target="_blank"
              rel="noreferrer"
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <RiInstagramFill />
              </div>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;