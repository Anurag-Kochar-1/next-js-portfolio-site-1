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
      I've worked with a range of technologies in the web development world. From Frontend to Backend to blockchain
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

      <ListItem> 
        <DiFirebase size='4rem' /> 
        <br /> 
        <ListContainer>
          <ListTitle> Backend-End </ListTitle>
          <ListParagraph> 
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem> 
        <SiHiveBlockchain size='3rem' />  
        <br />
        <ListContainer>
          <ListTitle> Blockchain </ListTitle>
          <ListParagraph> 
            Experience with <br />
            Solidity and tools
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;