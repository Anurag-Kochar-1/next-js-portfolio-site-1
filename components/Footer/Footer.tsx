import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer:React.FC = () => {
  return (
    <FooterWrapper id="footer">

      <LinkList>

        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:xxx-xxx-xxx"> xxx-xxx-xxxx </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:anuragkochar1111@gmail.com">
            anuragkochar1111@gmail.com
          </LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Made with love </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Anurag-Kochar-1">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons onClick={() => alert("not added yet, kindly use email")}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;