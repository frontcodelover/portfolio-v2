'use client'
import React, { useEffect } from 'react';
import Contact from './components/contact/page';
import { Footer } from './components/footer/footer';
import { Headings } from './components/hero/headings';
import { Projects } from './components/projects/projects';
import { About } from './components/skills/about';
import { Skills } from './components/skills/skills';
import { Title } from './components/title/title';
import { Header } from '@/app/components/header/header';

function asciiArt(): void {
  console.log(`
                                              _  _ ___                                                
   |  _    _ |_   _  ._ _ |_   _       ._   /  | \\  |    _        /\\  | _|_  _  ._ ._   _. ._   _  _  
 \\_| (/_  (_ | | (/_ | (_ | | (/_  |_| | |  \\_ |_/ _|_  (_) |_|  /--\\ |  |_ (/_ |  | | (_| | | (_ (/_ 
                                                                                                      
 job @ nicolasderaemy . fr
`);
}


export default function Home() {
	useEffect(() => {
		asciiArt();
	}, []);

	return (
    <div className='justify-between items-center'>
      <div className='flex-1'>
        <Header />
        <Headings />
        <Title heading={'This is who I am and what I love to do...'} id={'skills'} />
        <Skills />
        <About />
        <Title heading={"Some Projects I've Been Involved In... "} id={'projects'} />
        <Projects />
        <Title heading={"Let's Get In Touch..."} id={'contact'} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
