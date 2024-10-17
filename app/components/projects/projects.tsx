'use client';
import React from 'react';
import { Box } from './box/box';
import { useGitHubCommits } from '@/app/hooks/useGitHubCommits';
import { motion } from 'framer-motion';

export const Projects = () => {
  const { commits, loading, error, totalCount } = useGitHubCommits();

  console.log(commits, loading, error, totalCount);

  return (
    <>
      <div>
        <div id="projects" />
        <div className="grid lg:grid-cols-3 gap-7 w-full">
          {/* Première Box avec whileInView */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }} 
          >
            <Box
              style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full'}
              colors={'bg-slate-300 text-slate-900'}
              headings={'Photographer MarketPlace'}
              text={'A market place for photographers who want to sell their photos.'}
              stack={['NextJS', 'Supabase', 'TypeScript', 'TailwindCSS']}
              link={'/projects'}
            />
          </motion.div>

          {/* Deuxième Box avec whileInView et un délai supplémentaire */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }} 
          >
            <Box
              style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full'}
              colors={'bg-slate-300 text-slate-900'}
              headings={'BetweenDevs'}
              text={'An app to find developers who use the same technologies as you.'}
              stack={['React', 'TailwindCSS', 'NodeJS', 'WebSocket']}
              link={'/projects'}
            />
          </motion.div>

          {/* Troisième Box avec whileInView et un délai encore plus grand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}  
          >
            <Box
              style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full'}
              colors={'bg-slate-300 text-slate-900'}
              headings={'Favorite books'}
              text={'An app to save your favorite books.'}
              stack={['React', 'Firebase', 'TailwindCSS']}
              link={'/projects'}
            />
          </motion.div>
        </div>

        <div className="text-3xl ml-[66%] w-3/6 py-20 tracking-tighter">
          Just few projects after <span className="font-black">{totalCount} commits</span>
        </div>
      </div>
    </>
  );
};
