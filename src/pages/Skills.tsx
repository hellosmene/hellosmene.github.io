import React from 'react';
import Page from 'components/common/Page';
import Title from 'components/common/Title';
import SkillCard from 'components/Skills/SkillCard';
import Html from 'assets/html.png';
import Css3 from 'assets/css-3.png';
import Javascript from 'assets/javascript.png';
import ReactIcon from 'assets/react.png';
import Mongodb from 'assets/mongodb.png';
import Nodejs from 'assets/nodejs.png';
import Linux from 'assets/linux.png';

const Skills = () => (
  <Page className='flex justify-center bg-surface-600 py-12' id='skills'>
    <div className='w-[min(800px,100%)] flex flex-col justify-center'>
      <Title className='text-center'>What I do</Title>
      {/* Skill Box */}
      <div className='flex justify-center flex-wrap gap-3'>
        <SkillCard icon={Html} title='html' />
        <SkillCard icon={Css3} title='css' />
        <SkillCard icon={Javascript} title='javascript' />
        <SkillCard icon={ReactIcon} title='react' />
        <SkillCard icon={Nodejs} title='nodejs' />
        <SkillCard icon={Mongodb} title='mongodb' />
        <SkillCard icon={Linux} title='linux' />
      </div>
    </div>
  </Page>
);

export default Skills;
