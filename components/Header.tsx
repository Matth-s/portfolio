import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex bg-[#141726] border-b-2 h-16">
      <nav className="my-auto">
        <ul className="flex gap-x-8 px-8 font-bold">
          <li>
            <Link href={'/'}>Accueil</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
