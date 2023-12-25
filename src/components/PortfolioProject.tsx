import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";

import { Work } from '../typings';
import urlFor from '../lib/urlFor';
interface Props
{
  work: Work;
}

const PortfolioProject = ( { work }: Props ) =>
{
 
  return (
    <div className="relative flex items-center justify-center w-full shadow-xl shadow-gray-900 rounded-xl p-4 group hover:bg-black/60 h-[30vh]" >

      <Image
        className='rounded-xl group-hover:opacity-10 object-cover'
        src={ urlFor( work.mainImage.asset._ref ).url() }
        fill
        alt={ work.projectName }
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
        <h3 className="sm:text-sm md:text-xl pb-3 text-white tracking-wider text-center" > { work.projectName } </h3>

        <Link href={ `/projects/project/[slug]` } as={ `/projects/project/${ work?.slug?.current }` }>
          <p className="flex flex-row items-center justify-center w-[180px] text-center py-1 rounded-xl bg-white text-gray-700 font-bold text-md cursor-pointer" >  <PiArrowBendDoubleUpRightBold className='pr-2 text-3xl' />  Project details </p>
        </Link>
      </div>

    </div>
  )
}

export default PortfolioProject;

{/*   <p className = "pb-4 text-md pt-2 text-white text-center" > { tag } </p>*/ }