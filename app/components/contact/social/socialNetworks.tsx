import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const SocialNetworks = () => {
  return (
    <div className='flex gap-4 items-center justify-center flex-wrap'>
      <Link href='https://www.linkedin.com/in/nicolas-de-raemy/' target='_blank'>
        <div className='flex gap-2 items-center dark:text-slate-950 hover:text-slate-600 dark:hover:text-slate-600  bg-white px-6 py-1 rounded-2xl text-xl text-slate-900 tracking-tighter dark:border-none border'>
          <FaLinkedin />
          <span>LinkedIn</span>
        </div>
      </Link>
      <Link href='https://github.com/frontcodelover' target='_blank'>
        <div className='flex gap-2 items-center dark:text-slate-950 hover:text-slate-600 dark:hover:text-slate-600  bg-white px-6 py-1 rounded-2xl text-xl text-slate-900 tracking-tighter dark:border-none border'>
          <FaGithub />
          <span>GitHub</span>
        </div>
      </Link>
      <Link href='https://x.com/frontcodelover' target='_blank'>
        <div className='flex gap-2 items-center dark:text-slate-950 hover:text-slate-600 dark:hover:text-slate-600  bg-white px-6 py-1 rounded-2xl text-xl text-slate-900 tracking-tighter dark:border-none border'>
          <FaXTwitter />
          <span>Twitter</span>
        </div>
      </Link>
    </div>
  );
};
