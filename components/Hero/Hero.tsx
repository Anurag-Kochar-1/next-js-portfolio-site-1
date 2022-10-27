import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero:React.FC = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, <br /> I am Anurag Kochar
      </SectionTitle>

      <SectionText>
        The 10x Full Stack Blockchain Developer who loves to build things
      </SectionText>

      <Button onClick={() => window.location = `https://www.youtube.com`} >  Learn more </Button>
    </LeftSection>
  </Section>
);

export default Hero;