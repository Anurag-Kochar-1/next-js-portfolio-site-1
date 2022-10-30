import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiHiveBlockchain } from "react-icons/si"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import {skills} from "../../constants/techStack"
import SkillCard from '../Skills/TechStack/SkillCard';


const Technologies:React.FC = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Skills </SectionTitle>
    <SectionText>
      I've worked with the following technologies.
    </SectionText>

    <List>

      {/* <ListItem> 

        <DiReact size='4rem' />  

        <br />
        <ListContainer>
          <ListTitle> Frontend-End </ListTitle>
          <ListParagraph> 
            Experience with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>

      </ListItem> */}

      {skills.map((skill) => (
        <SkillCard skill={skill} />
      ))}

    </List>
  </Section>
);

export default Technologies;