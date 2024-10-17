'use client';
import React from 'react';
import { Box } from './box/box';
import { useGitHubCommits } from '@/app/hooks/useGitHubCommits'; // Utilise le hook

export const Projects = () => {
  const { commits, loading, error,totalCount } = useGitHubCommits();

	console.log(commits, loading, error, totalCount);

  return (
    <>
      <div id='projects' />
      <div className='flex gap-7'>
        <Box
          style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]'}
          colors={'bg-slate-300 text-slate-900'}
          headings={'Learning'}
          text={'A front developper is always learning new things.'}
          link={'/projects'}
        />
        <Box
          style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]'}
          colors={'bg-slate-300 text-slate-900'}
          headings={'Learning'}
          text={'A front developper is always learning new things.'}
          link={'/projects'}
        />
        <Box
          style={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]'}
          colors={'bg-slate-300 text-slate-900'}
          headings={'Learning'}
          text={'A front developper is always learning new things.'}
          link={'/projects'}
        />
			</div>
			<div className='flex gap-7 text-7xl'>
        All this after {totalCount}
			</div>
    </>
  );
};
