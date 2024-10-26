import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface BoxProps {
  style: string;
  text: string;
  colors: string;
  headings: string;
  stack: { name: string; colors: string }[];
  link: string;
  icon: React.ReactNode;
  image?: StaticImageData;
}

export const Box: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <div className={`${props.style} ${props.colors} rounded-3xl text-slate-200 h-full border border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300`}>
      <div className='flex flex-col gap-6 h-full'>
        <div className='text-sm flex gap-2 justify-start w-full flex-wrap'>
          {props.stack.map((item, index) => (
            <span className={`${item.colors} px-3 rounded-sm tracking-normal`} key={index}>
              {item.name}{' '}
            </span>
          ))}
        </div>
        <div className='flex flex-col justify-between items-center gap-6 h-full'>
          <div className='flex flex-col gap-6'>
            <h3 className='font-bold md:text-2xl text-xl'>{props.headings}</h3>
            <div className='md:text-4xl text-3xl text-balance'>{props.text}</div>
          </div>
          <div className='text-right'>
            <Link href={props.link} target='_blank'>
              <div className='flex gap-3 items-center border-2 rounded-2xl px-5 py-1 bg-white dark:hover:bg-white dark:bg-slate-200 text-slate-900 hover:shadow-lg ease-in-out transition-shadow'>
                <span className='font-bold'>Check on Github</span>
                {props.icon}
              </div>
            </Link>
          </div>
        </div>
      </div>
      {props.image && <Image src={props.image} alt={props.headings} width={150} height={0} className='rounded-2xl object-contain' />}
    </div>
  );
};
