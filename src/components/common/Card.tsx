import React from 'react';
import { combineClassNames } from 'utils';

interface Props extends React.PropsWithChildren {
  className?: string;
}

const Card = ({ children, className }: Props) => (
  <div
    className={combineClassNames('rounded-md bg-surface-500 p-3', className)}
  >
    {children}
  </div>
);

export default Card;
