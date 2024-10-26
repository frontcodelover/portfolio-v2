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
    <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} variants={aboutVariants} className='flex flex-col text-2xl tracking-tighter lg:mb-40'>
      <div className='md:ml-[33%] flex gap-8 flex-col'>
        Après une première carrière enrichissante, j&apos;ai décidé de suivre ma passion pour le développement en entamant une reconversion professionnelle. Ce parcours m&apos;a permis de construire
        une solide experience en React/Next et de renforcer ma compréhension des technologies web modernes.
        <div>
          Mon parcours professionnel m&apos;a également aidé à développer des compétences précieuses : travail en équipe, communication claire, polyvalence et bien sûr, une curiosité insatiable pour
          les nouvelles technologies. Je suis désormais à la recherche d&apos;une nouvelle opportunité pour évoluer au sein d&apos;une équipe bienveillante et contribuer au développement de projets
          innovants.
        </div>
      </div>
    </motion.div>
  );
};
