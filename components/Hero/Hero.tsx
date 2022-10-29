import React from 'react';
import Link from "next/link"

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , SubtitleGradientBlueToPink } from './HeroStyles';

const Hero:React.FC = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, <br /> I am Anurag Kochar
      </SectionTitle>

      <SectionText>
        A Frontend Developer on a path to become a <span> Full Stack web 3 Developer </span> 
      </SectionText>

      <Button> <a href='#footer'> Contact me </a> </Button>
    </LeftSection>
  </Section>
);

export default Hero;