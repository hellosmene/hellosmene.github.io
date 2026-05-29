import React from 'react';
import Page from 'components/common/Page';
import Title from 'components/common/Title';

const Contacts = () => {
  return (
    <Page
      className='bg-surface-600 py-12 flex flex-col items-center'
      id='contacts'
    >
      <div className='w-[min(800px,100%)] flex flex-col'>
        <Title className='text-center'>Let's get in touch</Title>
      </div>
    </Page>
  );
};

export default Contacts;
