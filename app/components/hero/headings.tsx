'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CgArrowDown } from 'react-icons/cg';
import Link from 'next/link';

export const Headings = () => {
  return (
    <>
      <motion.div className='flex h-screen max-h-screen lg:items-center bg-gradient-to-t from-white from-50% to-zinc-300'>
        <div className='grid md:grid-cols-2 md:pl-9 md:items-center'>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='flex flex-col text-center text-6xl lg:text-7xl justify-center lg:text-right lg:flex-1 lg:min-w-6/12 font-black tracking-tighter py-6 px-10 lg:p-10 text-slate-900 dark:text-slate-200'
          >
            Hello World,
            <span className='lg:pl-24 block'>
              I&#39;m <span className='text-emerald-600 drop-shadow-[100px_0px_100px_rgba(5,150,50,0.80)]'>Nicolas</span>
            </span>
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className='lg:w-2/3 lg:m-0 w-2/3 mx-auto tracking-tighter'>
            <h1 className='md:text-2xl text-xl font-normal dark:text-slate-300'>
              Développeur Front-End passionné par <span className='font-bold'>React & Next.js</span>, prêt à évoluer au sein d&apos;une
              <span className='underline'> équipe bienveillante.</span>
            </h1>
          </motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }} className='flex justify-center'>
        <Link href='/#skills'>
          <CgArrowDown className='mx-auto -mt-28 text-3xl animate-bounce' />
        </Link>
      </motion.div>
    </>
  );
};
