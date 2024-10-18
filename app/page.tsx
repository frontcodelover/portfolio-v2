import Contact from './components/contact/page';
import { Footer } from './components/footer/footer';
import { Headings } from './components/hero/headings';
import { Projects } from './components/projects/projects';
import { About } from './components/skills/about';
import { Skills } from './components/skills/skills';
import { Title } from './components/title/title';

export default function Home() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex-1'>
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
