import Box from './box';
import React from 'react';

export const Skills = () => {
  return (
    <div className='flex flex-wrap flex-col md:flex-row gap-5 mb-16 md:mb-40 mt-20 tracking-tighter'>
      <Box
        size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]'}
        colors={'bg-red-500'}
        heading={'Learning'}
        text={'A front developper is always learning new things.'}
      />
      <Box
        size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(66.66%-10px)]'}
        colors={'bg-neutral-500'}
        heading={'React.js'}
        text={'I love to work with React.js & Next.js, to build modern web experiences and applications.'}
      />
      <Box
        size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)]'}
        colors={'bg-slate-500'}
        heading={'Typescript'}
        text={'Because type is life, I use TypeScript to build my projects.'}
      />
      <Box
        size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)]'}
        colors={'bg-purple-500'}
        heading={'Curious'}
        text={'Curiosity is the key to learn and improve yourself every day.'}
      />
      <Box
        size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(66.66%-10px)]'}
        colors={'bg-emerald-500'}
        heading={'TailwindCSS'}
        text={'Style is always important, I use TailwindCSS to style my projects and make them responsive.'}
      />
      <Box
        size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]'}
        colors={'bg-stone-500'}
        heading={'Passionate'}
        text={'Coding is my passion, I love to build things from scratch and see them come to life.'}
      />
    </div>
  );
};
