'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const aboutVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} variants={aboutVariants} className='flex flex-col md:text-xl text-slate-500 tracking-tight'>
			<div className='md:px-40 px-20 mx-auto flex gap-8 flex-col'>
				<div>
        Il y a 15 ans, j&apos;écrivais mes premières lignes de code, et depuis, je n&apos;ai jamais cessé de développer. En 2013, j&apos;ai lancé un site d&apos;affiliation, toujours en ligne
        aujourd&apos;hui, qui m&apos;a permis de poser les bases de mes <span className='text-slate-800 font-bold'>compétences en développement web et de les affiner au fil des années.</span>
				</div>
        <div>
          Jusqu&apos;à présent, j&apos;ai toujours codé par passion sur mon temps libre, mais en 2022, j&apos;ai décidé de passer à l&apos;étape supérieure et de transformer cette passion en véritable
          métier. J&apos;ai alors entrepris une formation intensive en développement Front-End à l&apos;école O&apos;Clock, où j&apos;ai acquis une <span className='text-slate-800 font-bold'>expertise en JavaScript, ReactJS, NextJS et bien plus encore.</span>
        </div>
      </div>
    </motion.div>
  );
};
