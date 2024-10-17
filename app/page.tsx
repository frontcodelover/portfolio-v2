import { Headings } from './components/hero/headings';
import { Skills } from './components/skills/skills';
import { Title } from './components/title/title';

export default function Home() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex-1'>
        <Headings />
        <Title heading={'This is who I am and what I love to do...'} />
        <Skills />
      </div>
    </div>
  );
}
