'use client';
import React, { useRef, useState, useLayoutEffect } from 'react';
import { Box } from './box/box';
import { FaGithub } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const stacks = {
  nextjs: { name: 'NextJS', colors: 'bg-blue-500 text-slate-50' },
  react: { name: 'React', colors: 'bg-blue-500 text-slate-50' },
  typescript: { name: 'TypeScript', colors: 'bg-blue-500 text-slate-50' },
  tailwind: { name: 'Tailwind', colors: 'bg-emerald-500 text-slate-50' },
  nodejs: { name: 'NodeJS', colors: 'bg-green-500 text-slate-50' },
  websocket: { name: 'WebSocket', colors: 'bg-yellow-500 text-slate-50' },
  firebase: { name: 'Firebase', colors: 'bg-orange-500 text-slate-50' },
  supabase: { name: 'Supabase', colors: 'bg-orange-500 text-slate-50' },
};

const photographerMarketplace = [stacks.nextjs, stacks.supabase, stacks.typescript, stacks.tailwind];
const betweenDevs = [stacks.react, stacks.nodejs, stacks.websocket, stacks.tailwind];
const favoriteBooks = [stacks.nextjs, stacks.firebase, stacks.tailwind];

const BETWEENDEVS = '/videos/betweendevs.mp4';
const MYBOOKLIST = '/videos/mybooklist.mp4';
const PICSELL = '/videos/picsell.mp4';

export const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Fonction pour faire défiler à droite
  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild ? (carouselRef.current.firstChild as HTMLDivElement).clientWidth : 300;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Fonction pour faire défiler à gauche
  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild ? (carouselRef.current.firstChild as HTMLDivElement).clientWidth : 300;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  // Vérifie la position de défilement pour afficher ou masquer les boutons
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setIsAtStart(scrollLeft <= 1); // Utilise une marge pour Safari
      setIsAtEnd(scrollLeft + clientWidth >= Math.round(scrollWidth - 1)); // Ajustement de précision
    }
  };

  // Ajoute l'événement de défilement et met à jour la position initiale
  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      setTimeout(handleScroll, 100); // Déclenche la vérification avec un léger délai pour Safari
      // Centrer la première carte au chargement
      const cardWidth = carousel.firstChild ? (carousel.firstChild as HTMLDivElement).clientWidth : 300;
      carousel.scrollBy({ left: -carousel.scrollLeft + cardWidth / 2, behavior: 'smooth' });
    }
    return () => {
      if (carousel) carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id='projects' className='relative overflow-hidden ml-12'>
        <div
          ref={carouselRef}
          className='flex min-w-full py-2 pl-4 md:pl-0 overflow-x-auto snap-x snap-mandatory horizontal-scrollbar-hidden justify-start'
        >
          <Box
            style={'flex flex-col justify-center items-center gap-7 min-w-[80%] md:min-w-[auto]'}
            colors={'bg-white text-slate-900'}
            headings={'BetweenDevs'}
            text={'Application de mise en relation pour les développeurs Front-End et Back-End.'}
            stack={betweenDevs}
            link={'https://github.com/frontcodelover/betweendevs-public'}
            icon={<FaGithub />}
            video={BETWEENDEVS}
            statut={'terminé'}
          />

          <Box
            style={'flex flex-col ml-6 gap-7 min-w-[80%] md:min-w-[auto]'}
            colors={'bg-white text-slate-900'}
            headings={'Picsell'}
            text={'Marketplace entre photographes professionnels et amateurs de photographie.'}
            stack={photographerMarketplace}
            link={'https://github.com/frontcodelover/picsell/'}
            icon={<FaGithub />}
            statut={'en cours'}
            video={PICSELL}
          />

          <Box
            style={'flex flex-col gap-7 ml-6 mr-40 min-w-[80%] md:min-w-[auto]'}
            colors={'bg-white text-slate-900'}
            headings={'Favorite books'}
            text={'Application pour créer des listes de livres favoris et ajouter un critique.'}
            stack={favoriteBooks}
            link={'https://github.com/frontcodelover/mybooklist'}
            icon={<FaGithub />}
            statut={'terminé'}
            video={MYBOOKLIST}
          />
        </div>

        <div className='flex m-8 gap-3 justify-end'>
          <button
            onClick={scrollLeft}
            disabled={isAtStart}
            className={`${isAtStart ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600'} top-1/2 transform -translate-y-1/2 p-2 bg-slate-200 rounded-full`}
          >
            <IoIosArrowBack size={20} />
          </button>

          <button
            onClick={scrollRight}
            disabled={isAtEnd}
            className={`${isAtEnd ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600'} top-1/2 transform -translate-y-1/2 p-2 bg-slate-200 rounded-full`}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </>
  );
};
