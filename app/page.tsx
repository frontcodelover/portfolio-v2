'use client';
import React, { useEffect } from 'react';
import Contact from './components/contact/page';
import { Footer } from './components/footer/footer';
import { Headings } from './components/hero/headings';
import { Projects } from './components/projects/projects';
import { About } from './components/skills/about';
// import { Skills } from './components/skills/skills';
import { Title } from './components/title/title';
import { Header } from '@/app/components/header/header';

function asciiArt(): void {
  console.log(`
 Tu recherches quelque chose ? :) 
 Surement un développeur web qui aime les défis ?
 Tu as un poste en CDI ou en Alternance à m'offrir ?
 Tu es au bon endroit car je suis à la recherche d'une nouvelle opportunité.
 ______________________________________________________________
 Contacte-moi pour en savoir plus.
 job @ nicolasderaemy . fr
`);
}

export default function Home() {
  useEffect(() => {
    asciiArt();
  }, []);

  return (
    <div>
      <div className='flex-1'>
        <Header />
        <section className='bg-white'>
          <Headings />
        </section>
        <section className='bg-white py-40'>
          <Title heading={'Qui je suis.'} id={'skills'} />
          <About />
        </section>
        {/* <Skills /> */}
        <section className='py-40 bg-zinc-100'>
          <Title heading={'Derniers projets.'} id={'projects'} />
          <Projects />
				</section>
				
				<section className='py-40'>

        <Title heading={'Me contacter.'} id={'contact'} />
        <Contact />
				</section>
        <Footer />
      </div>
    </div>
  );
}
