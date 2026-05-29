import React from 'react';
import Presentation from 'components/AboutMe/Presentation';
import Image from 'components/AboutMe/Image';
import Page from 'components/common/Page';

const AboutMe = () => {
  return (
    <Page>
      <div className=''>
        <Presentation />
        {/* <Image /> */}
      </div>
    </Page>
  );
};

export default AboutMe;
