import React from 'react'

import { Work, ProjectTag } from '../../../../typings';
import { getAllWorks, getAllprojectTags } from '../../../../utils/fetchPortfolioDetails '
import Portfolio from '@/components/Portfolio';
type Props = {
  works: Work[];
  projectTags: ProjectTag[];
};


const ProjectsSection = async (  ) =>
{
  const works = await getAllWorks();
  const projectTags = await getAllprojectTags();

  return (
    <Portfolio works={ works } projectTags={ projectTags } />
  )
}

export default ProjectsSection