import React from 'react';
import NavBarLink from './NavbarLink';

const Navbar = () => {
  return (
    <header className='mb-24 flex justify-center'>
      <nav className='px-5 py-2 bg-surface-600 rounded-full glass-effect'>
        <ul className='list-none flex flex-row gap-2'>
          <NavBarLink section='about-me'>About Me</NavBarLink>
          <NavBarLink section='skills'>Skills</NavBarLink>
          <NavBarLink section='projects'>Projects</NavBarLink>
          <NavBarLink section='contacts'>Contacts</NavBarLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
