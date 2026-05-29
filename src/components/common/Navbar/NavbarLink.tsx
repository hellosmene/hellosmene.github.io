import React from 'react';

interface Props extends React.PropsWithChildren {
    section: string;
}

const NavBarLink = ({ section, children }: Props) => {
    return <li><a href={`#${section}`} className='hover:text-accent-500'>{children}</a></li>
}

export default NavBarLink;
