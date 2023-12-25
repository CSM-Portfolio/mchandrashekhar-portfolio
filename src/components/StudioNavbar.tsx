import Link from 'next/link'
import React from 'react'
import {  ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { NavbarProps } from 'sanity'

const StudioNavbar = ( props: NavbarProps ) =>
{
    return (
        <div className='bg-[#101112] px-5 py-3 text-gray-400'>
            <Link href="/" className='flex items-center space-x-2 text-sm'>
                <ArrowUturnLeftIcon className='h-5 w-5 cursor-pointer' />
                <span>Go To Website</span>
            </Link>
            { props.renderDefault( props ) }
        </div>
    )
}

export default StudioNavbar