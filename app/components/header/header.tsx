'use client';
import Link from 'next/link';

export const Header = () => {
  const links = [
    { name: 'A propos', href: '/#skills' },
    { name: 'Projets', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className='flex h-full items-center justify-between relative'>
      <div className='fixed z-10 top-0 left-0 w-full flex justify-between px-8 py-4 border-b border-gray-300 bg-primary/10 backdrop-blur'>
        <Link href='/'>
          <h1 className='flex text-3xl font-black gap-1'>
            <span className='translate-x-1'></span>
          </h1>
        </Link>
        <nav>
          <ul className='flex items-center space-x-4 text-sm tracking-tight text-slate-800 4k:text-3xl'>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
