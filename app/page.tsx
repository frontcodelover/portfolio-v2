import { Headings } from './components/hero/headings';

export default function Home() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex-1'>
        <Headings />
        <Headings />
      </div>
    </div>
  );
}
