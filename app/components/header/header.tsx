'use client';
import { CgDarkMode } from 'react-icons/cg';
import Link from 'next/link';
import Button from './theme/button';

//import le context pour change la couleur du theme
import { useThemeColor } from '@/app/context/themeColorContext';

export const Header = () => {
  const { themeColor, setThemeColor } = useThemeColor();

  const links = [
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleClick = () => {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light');
  };

  return (
    <header className='flex h-full items-center justify-between'>
      <Link href='/'>
        <h1 className='flex text-3xl font-black gap-1'>
          <span className='translate-x-1'>N</span>d<span className='-translate-x-1 inline-block'>R</span>
        </h1>
      </Link>
      <nav>
        <ul className='flex items-center space-x-4'>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <Button onClick={handleClick} icon={<CgDarkMode />} className='flex' />
        </ul>
      </nav>
    </header>
  );
};
