import React from 'react';
import { combineClassNames } from 'utils';

interface Props extends React.PropsWithChildren {
  className?: string;
}

const Title = ({ children, className }: Props) => (
  <h1 className={combineClassNames(className, 'mb-8 text-accent-600')}>
    {children}
  </h1>
);

export default Title;
