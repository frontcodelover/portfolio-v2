'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CgArrowDown } from 'react-icons/cg';
import Link from 'next/link';
import { useGitHubCommits } from '@/app/hooks/useGitHubCommits';
import CountUp from 'react-countup';

export const Headings = () => {
  const { totalCount } = useGitHubCommits();
  return (
    <>
      <motion.div className='flex flex-col h-screen max-h-screen gap-8 items-center justify-center bg-gradient-to-t from-white from-50% to-zinc-300 w-full'>
        
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='flex flex-col text-center text-5xl lg:text-7xl justify-center lg:text-right font-black tracking-tighter text-slate-900 4k:text-9xl'
          >
            &lt;Hello World,
            <span className='block'>
              I&#39;m <span className='text-emerald-600 drop-shadow-[100px_0px_100px_rgba(5,150,50,0.80)]'>Nicolas {'/>'}  </span>
            </span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className='tracking-tighter'>
            <h2 className='md:text-2xl text-xl font-normal w-fit mx-auto text-left max-w-80 md:max-w-96 text-slate-500 4k:text-4xl 4k:max-w-fit'>
              Développeur Front-End passionné par <span className='font-bold text-slate-800'>ReactJS, NextJS, TailwindCSS </span>
              <div className='text-xl text-center 4k:text-4xl'>
                <span className='text-emerald-600 font-bold'><CountUp end={totalCount} duration={5} /> commits</span> à ce jour
              </div>
            </h2>
          </motion.div>
        
      </motion.div>
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }} className='flex justify-center'>
        <Link href='/#skills'>
          <CgArrowDown className='mx-auto -mt-28 text-3xl animate-bounce' />
        </Link>
      </motion.div>
    </>
  );
};
