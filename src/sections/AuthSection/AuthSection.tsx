import React from 'react';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';

const AuthSection = () => {
  return (
    <SectionWithContainer>
      <DecoratorBox>
        <h1 style={{ textAlign: 'center' }}>Auth</h1>
      </DecoratorBox>
    </SectionWithContainer>
  );
};

export default AuthSection;
