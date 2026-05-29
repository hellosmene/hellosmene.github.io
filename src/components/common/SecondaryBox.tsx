import React from 'react';
import { combineClassNames } from 'utils';

interface Props extends React.PropsWithChildren {
  className?: string;
}

const SecondaryBox = ({ children, className }: Props) => {
  return (
    <div className='flex justify-center bg-surface-600 py-12'>
      <div className='w-[min(800px,100%)] flex flex-col justify-center'>
        {children}
      </div>
    </div>
  );
};

export default SecondaryBox;
