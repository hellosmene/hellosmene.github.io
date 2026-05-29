import React from 'react';

interface Props {
  title: string;
  icon: string;
}

const SkillCard = ({ title, icon }: Props) => (
  <div className='flex flex-col items-center gap-3 bg-surface-500 p-5 lg:p-8 shadow-lg flex-1'>
    <img className='w-12 h-12 lg:w-20 lg:h-20' src={icon} />
    <p className='text-center uppercase'>{title}</p>
  </div>
);

export default SkillCard;
