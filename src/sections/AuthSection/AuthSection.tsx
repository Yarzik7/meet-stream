import React from 'react';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import Form from '../../components/Form/Form';

const AuthSection = () => {
  return (
    <SectionWithContainer>
      <DecoratorBox>
        <h1 style={{ textAlign: 'center' }}>Auth</h1>
        <Form />
      </DecoratorBox>
    </SectionWithContainer>
  );
};

export default AuthSection;
