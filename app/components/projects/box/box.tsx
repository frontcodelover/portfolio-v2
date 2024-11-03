import React from 'react';
import Link from 'next/link';

interface BoxProps {
  style: string;
  text: string;
  colors: string;
  headings: string;
  stack: { name: string; colors: string }[];
  link: string;
  icon: React.ReactNode;
  video?: string;
  statut: string;
}

export const Box: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <div className={`${props.style} rounded-3xl text-slate-200 h-full md:w-[500px]`}>
      <div className={` ${props.colors} rounded-3xl text-slate-200 h-[300px] w-[300px] md:h-[500px] md:w-[500px]`}>
        <div className='flex justify-center items-center'>{props.video && <video src={props.video} autoPlay loop muted playsInline className='w-full h-full rounded-2xl object-contain' />}</div>
      </div>

      <div className='flex flex-col gap-1 tracking-tight'>
        <div className='flex w-full text-sm text-slate-400'> Projet {props.statut}</div>
        <div className='text-lg'>
					<span className='text-slate-500'>{props.text}
          <span className='font-bold text-slate-800'> {props.headings}</span>
					</span>
        </div>
        {/* 
        <div className=' flex gap-2 justify-start w-full flex-wrap text-slate-800'>
          <span className='font-bold '>Stack :</span>{' '}
          {props.stack.map((item, index) => (
            <span className={`  rounded-sm tracking-normal`} key={index}>
              {item.name}
            </span>
          ))}
				</div>*/}

        <div className='flex justify-start w-full mt-4'>
          <Link href={props.link} target='_blank'>
            <span className='flex gap-3 items-center'>
              <span className='font-bold text-emerald-600 hover:text-emerald-700 ease-in-out flex gap-1'>
                <span>{props.headings}</span>
                <span>sur Github &gt;</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
