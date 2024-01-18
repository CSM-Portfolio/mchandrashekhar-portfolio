/* eslint-disable @next/next/no-async-client-component */
import React, { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

import { getAllSkills, getAllWorks, getAllskillTags, getAllprojectTags } from '@/utils/fetchPortfolioDetails ';

export const revalidate = 60;

export default async function Home ()
{
  const skills = await getAllSkills();
  const skillTags = await getAllskillTags();
  const works = await getAllWorks();
  const projectTags = await getAllprojectTags();

  return (
    <>
      <div className="">
        <Hero />
        <About />
        <Skills skills={ skills } skillTags={ skillTags } />
        <Portfolio works={ works } projectTags={ projectTags } />
        <Contact />
        {/* <Footer/> */ }
      </div>
    </>
  );
}
