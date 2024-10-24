'use client';
import React from 'react';
import { Box } from './box/box';
import { useGitHubCommits } from '@/app/hooks/useGitHubCommits';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const stacks = {
  nextjs: {
    name: 'NextJS',
    colors: 'bg-blue-500 text-slate-50',
  },
  react: {
    name: 'React',
    colors: 'bg-blue-500 text-slate-50',
  },
  typescript: {
    name: 'TypeScript',
    colors: 'bg-blue-500 text-slate-50',
  },
  tailwind: {
    name: 'Tailwind',
    colors: 'bg-emerald-500 text-slate-50',
  },
  nodejs: {
    name: 'NodeJS',
    colors: 'bg-green-500 text-slate-50',
  },
  websocket: {
    name: 'WebSocket',
    colors: 'bg-yellow-500 text-slate-50',
  },
  firebase: {
    name: 'Firebase',
    colors: 'bg-orange-500 text-slate-50',
  },
  supabase: {
    name: 'Supabase',
    colors: 'bg-orange-500 text-slate-50',
  },
};

const photographerMarketplace = [stacks.nextjs, stacks.supabase, stacks.typescript, stacks.tailwind];
const betweenDevs = [stacks.react, stacks.nodejs, stacks.websocket, stacks.tailwind];
const favoriteBooks = [stacks.nextjs, stacks.firebase, stacks.tailwind];

export const Projects = () => {
  const { totalCount } = useGitHubCommits();

  return (
    <>
      <div id='projects'>
        <div className='grid lg:grid-cols-3 gap-7 w-full mt-20'>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
            <Box
              style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full'}
              colors={'bg-slate-300 text-slate-900'}
              headings={'BetweenDevs'}
              text={'An app to find developers who use the same technologies as you.'}
              stack={betweenDevs}
              link={'https://github.com/frontcodelover/betweendevs-public'}
              icon={<FaGithub />}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
            <Box
              style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full'}
              colors={'bg-slate-300 text-slate-900'}
              headings={'Photographer MarketPlace'}
              text={'A market place for photographers who want to sell their photos.'}
              stack={photographerMarketplace}
              link={'https://github.com/frontcodelover/picsell/'}
              icon={<FaGithub />}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
            <Box
              style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full'}
              colors={'bg-slate-300 text-slate-900'}
              headings={'Favorite books'}
              text={'An app to save your favorite books and share them with others.'}
              stack={favoriteBooks}
              link={'https://github.com/frontcodelover/mybooklist'}
              icon={<FaGithub />}
            />
          </motion.div>
				</div>
        <div className='text-2xl md:text-3xl md:ml-[66%] md:w-3/6 w-4/6 py-20 tracking-tighter'>
          Just few projects after <span className='font-black'>{totalCount} commits</span>
        </div>
      </div>
    </>
  );
};
