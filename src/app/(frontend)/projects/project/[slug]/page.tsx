import React from 'react'
import { getWorkBySlug } from "@/utils/fetchPortfolioDetails ";
import { Work } from '@/typings';
import PortfolioProjectDetails from '@/components/PortfolioProjectDetails';


export const revalidate = 100;

export default async function ProjectDetailPage ( { params }: any )
{
  const { slug } = params;
  const work: Work = await getWorkBySlug( slug );
  
  return (
    <> 
      <PortfolioProjectDetails work={ work } />
    </>
  )
}
