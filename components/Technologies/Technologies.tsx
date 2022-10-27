import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiHiveBlockchain } from "react-icons/si"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies:React.FC = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
      I've worked with a range of frontend technologies and currently learning backend skills like Node js
    </SectionText>

    <List>
      <ListItem> 
        <DiReact size='4rem' />  
        <br />
        <ListContainer>
          <ListTitle> Frontend-End </ListTitle>
          <ListParagraph> 
            Experience with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;