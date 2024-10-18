'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Box from './box';

export const Skills = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3, 
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className='flex flex-wrap flex-col md:flex-row gap-5 mb-16 md:mb-40 mt-20 tracking-tighter'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }} 
        variants={boxVariants}
        custom={0} 
        className='flex flex-wrap gap-5 w-full'
      >
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
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={boxVariants}
        custom={1} // Second index for delay
        className='flex flex-wrap gap-5 w-full'
      >
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
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={boxVariants}
        custom={2}
        className='flex flex-wrap gap-5 w-full'
      >
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
      </motion.div>
    </div>
  );
};
