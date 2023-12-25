import React from 'react';
import { BsFillTagsFill } from 'react-icons/bs';

import { Work, ProjectTag } from '../typings';

type Props = {
  projectTags: ProjectTag[];
  tagType: string;
};

const CloudTag = ( { projectTags, tagType }: Props ) =>
{
  // projectTags.length = 0;
  return (
    <div>
      <h2 className="flex flex-row flex-nowrap items-center mt-10">
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex justify-center items-center block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-[#f12711] text-white">
          <BsFillTagsFill className='pr-2 text-3xl' />
          {
            tagType === 'Projects' ? 'Project Tags' : 'Blog Tags'
          } 
        </span>
        <span className="flex-grow block border-t border-black"></span>
      </h2>

      <div className="flex justify-center flex-wrap gap-2 p-4 max-w-sm mx-auto my-4 text-sm">

        <div className="flex justify-center flex-wrap gap-2 p-4 max-w-sm mx-auto my-4 text-sm">
          {
            tagType === 'Projects' ?              
                projectTags.map( ( projectTag, index ) => (
                  <button
                    className='px-2 py-1 rounded'
                    key={ index }>
                    { projectTag.title }
                  </button>
                ) )              
              :
              <div>No details yet</div>
          }
        </div>
      </div>
    </div>
  )
}

export default CloudTag