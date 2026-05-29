import React from 'react';
import { combineClassNames } from 'utils';

interface Props extends React.PropsWithChildren {
  className?: string;
  id?: string;
}

const Page = ({ children, className, id }: Props) => {
  return (
    <section className={combineClassNames('px-6 lg:px-24', className)} id={id}>
      {children}
    </section>
  );
};

export default Page;
