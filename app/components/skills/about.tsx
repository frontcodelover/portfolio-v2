'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  // Configuration de l'animation
  const aboutVariants = {
    hidden: { opacity: 0, x: -50 }, // Commence avec une opacité 0 et légèrement à gauche
    visible: {
      opacity: 1,
      x: 0, // Retourne à sa position initiale
      transition: {
        duration: 0.8, // Durée de l'animation
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }} // L'animation commence lorsque 20% de l'élément est visible
      variants={aboutVariants}
      className='flex flex-col text-2xl tracking-tighter lg:mb-40'
    >
      <div className='md:ml-[33%] flex gap-8 flex-col'>
        After an enriching first career, I decided to follow my passion for development by embarking on a career change. This journey has allowed me to build a solid expertise in React and deepen my
        understanding of modern web technologies.
        <div>
          My professional background has also helped me develop valuable soft skills: teamwork, clear communication, versatility, and of course, an insatiable curiosity for new technologies. I am now
          looking for a new opportunity to grow within a supportive team and contribute to the development of innovative projects.
        </div>
      </div>
    </motion.div>
  );
};
