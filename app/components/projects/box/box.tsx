import React from 'react';
import Link from 'next/link';

interface BoxProps {
  style: string;
  text: string;
  colors: string;
  headings: string;
  link: string;
}

export const Box: React.FC<BoxProps> = ({ style, text, colors, headings, link }) => {
  return (
    <div className={`${style} ${colors} rounded-3xl text-slate-200`}>
      <h3 className='font-bold md:text-2xl text-xl'>{headings}</h3>
      <div className='lg:text-5xl text-4xl'>{text}</div>
      <Link href={link}></Link>
    </div>
  );
};
