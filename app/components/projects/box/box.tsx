import React from 'react';
import Link from 'next/link';

interface BoxProps {
  style: string;
  text: string;
  colors: string;
  headings: string;
  stack: Array<string>;
  link: string;
}

export const Box: React.FC<BoxProps> = ({ style, text, colors, headings, stack, link }) => {
  return (
    <div className={`${style} ${colors} rounded-3xl text-slate-200 h-full`}>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-6'>
          <h3 className='font-bold md:text-2xl text-xl'>{headings}</h3>
          <div className='md:text-4xl text-3xl text-balance'>{text}</div>
          <Link href={link}></Link>
        </div>
				<div className='text-sm flex items-end gap-2 justify-end w-full flex-wrap'>{
					stack.map((item, index) => (
						<span className='bg-emerald-500 text-slate-50 px-2 rounded-xl tracking-normal' key={index}>{item} </span>
					))
				}</div>
      </div>
    </div>
  );
};
