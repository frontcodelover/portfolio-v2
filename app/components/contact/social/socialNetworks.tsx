import Link from 'next/link';
import React from 'react';

export const SocialNetworks = () => {
  return (
    <div className='flex gap-4 items-center justify-center'>
      <Link href='https://www.linkedin.com/in/nicolas-rabault-6b7b7b1b6/' target='_blank'>
        <div className='text-3xl text-slate-200 dark:text-slate-300 hover:text-slate-400 dark:hover:text-slate-400'>
          <i className='fab fa-linkedin'></i>
          <span>LinkedIn</span>
        </div>
      </Link>
      <Link href='' target='_blank'>
        <div className='text-3xl text-slate-200 dark:text-slate-300 hover:text-slate-400 dark:hover:text-slate-400'>
          <i className='fab fa-github'></i>
          <span>GitHub</span>
        </div>
      </Link>
      <Link href='https://twitter.com/nicolasrabault' target='_blank'>
        <div className='text-3xl text-slate-200 dark:text-slate-300 hover:text-slate-400 dark:hover:text-slate-400'>
          <i className='fab fa-twitter'></i>
          <span>Twitter</span>
        </div>
      </Link>
    </div>
  );
};
