'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Box from './box';

export const Skills = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className='flex flex-wrap flex-col md:flex-row gap-5 mb-16 md:mb-40 mt-20 tracking-tighter'>
      <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={boxVariants} custom={0} className='flex flex-wrap gap-5 w-full'>
        <Box
          size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(66.66%-10px)]'}
          colors={'bg-red-500'}
          heading={'React.js'}
          text={"Je construis mes projets avec React.js et Next.js. J'aime aussi travailler avec des librairies comme Axios, React Query, etc."}
        />
        <Box
          size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]'}
          colors={'bg-neutral-500'}
          heading={'Apprendre'}
          text={"Curieux, j'aime apprendre de nouvelles choses et me former continuellement."}
        />
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={boxVariants}
        custom={1} // Second index for delay
        className='flex flex-wrap gap-5 w-full'
      >
        <Box
          size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)]'}
          colors={'bg-slate-500'}
          heading={'Typescript'}
          text={'Typescript est un outil puissant pour écrire du code JavaScript plus sûr et plus lisible.'}
        />
        <Box
          size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)]'}
          colors={'bg-purple-500'}
          heading={"Esprit d'équipe"}
          text={"Parce que le travail d'équipe est essentiel pour mener à bien un projet."}
        />
      </motion.div>

      <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={boxVariants} custom={2} className='flex flex-wrap gap-5 w-full'>
        <Box
          size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]'}
          colors={'bg-emerald-500'}
          heading={'TailwindCSS'}
          text={"Le CSS n'a jamais été aussi simple avec TailwindCSS, un framework CSS utilitaire."}
        />
        <Box
          size={'min-h-[350px] lg:min-h-[500px] flex flex-col gap-7 p-[30px] lg:p-[50px] w-full md:w-[calc(66.66%-10px)]'}
          colors={'bg-stone-500'}
          heading={'Enthousiaste'}
          text={"Je suis enthousiaste à l'idée de travailler sur des projets innovants et de relever de nouveaux défis."}
        />
      </motion.div>
    </div>
  );
};
