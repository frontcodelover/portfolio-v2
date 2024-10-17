'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CgArrowDown } from "react-icons/cg";

export const Headings = () => {

	return (
		<>
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }} className='flex max-h-screen h-[calc(100vh-10.50rem)] items-center'>
      <div className='grid grid-cols-2 pl-9'>
        <h1 className='flex flex-1 flex-col min-w-6/12 text-7xl font-black tracking-tighter -mt-36 items-end p-10 text-slate-900 dark:text-slate-200'>
          Hello World,
          <span className='pl-24 block'>
            I'm <span className='text-emerald-600'>Nicolas</span>
          </span>
        </h1>
        <div className='w-2/3 tracking-tighter'>
          <h2 className='text-2xl font-normal text-slate-700 dark:text-slate-300'>
            ___French Front-End Developer crafting modern web experiences with <span className='font-bold'>React & Next.js</span> ready to grow within a{' '}
            <span className='underline'>supportive team.</span>
          </h2>
        </div>
      </div>
			</motion.div>
			<motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }} className='flex justify-center'>
				<CgArrowDown className='mx-auto -mt-10 text-3xl animate-bounce' />
				</motion.div>
		</>
  );
};
