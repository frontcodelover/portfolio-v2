'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CgArrowDown } from 'react-icons/cg';
import Link from 'next/link';

export const Headings = () => {
  return (
    <>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }} className='flex h-screen max-h-screen lg:items-center'>
        <div className='grid lg:grid-cols-2 md:pl-9'>
          <h1 className='flex flex-col text-center text-6xl lg:text-7xl justify-center lg:text-right lg:flex-1 lg:min-w-6/12 font-black tracking-tighter lg:-mt-36 lg:items-end py-6 px-10 lg:p-10 text-slate-900 dark:text-slate-200'>
            Hello World,
            <span className='lg:pl-24 block'>
              I am <span className='text-emerald-600'>Nicolas</span>
            </span>
          </h1>
          <div className='lg:w-2/3 tracking-tighter'>
            <h2 className='md:text-2xl text-xl font-normal text-slate-700 dark:text-slate-300'>
              ___French Front-End Developer crafting modern web experiences with <span className='font-bold'>React & Next.js</span> ready to grow within a{' '}
              <span className='underline'>supportive team.</span>
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }} className='flex justify-center'>
        <Link href='/#skills'>
          <CgArrowDown className='mx-auto -mt-32 text-3xl animate-bounce' />
        </Link>
      </motion.div>
    </>
  );
};