import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLinkFacebook,
  SocialIconLinkInsta,
  SocialIconLinkYoutube,
  SocialIconLinkTwitter,
  SocialIconLinkLinkedin
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            </SocialLogo>
            <WebsiteRights>© 2021 | Made By <a href="/" style={{textDecoration: 'none', color: '#39FF14' }}>CHANDAN CHOUDHURY</a></WebsiteRights>
            <SocialIcons>
              <SocialIconLinkFacebook 
              href='https://www.facebook.com/Chandan.Choudhury.Odin' 
              target='_blank' 
              aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLinkFacebook>
              <SocialIconLinkInsta 
              href='https://www.instagram.com/chandan_choudhury_official/' 
              target='_blank' 
              aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLinkInsta>
              <SocialIconLinkYoutube
                href='https://www.youtube.com/channel/UCPkB1WTgLIU7elKO-_8LLPg?view_as=subscriber'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLinkYoutube>
              <SocialIconLinkTwitter
                target='_blank'
                aria-label='Twitter'
                href='https://twitter.com/CHANDAN_0809'
              >
                <FaTwitter />
              </SocialIconLinkTwitter>
              <SocialIconLinkLinkedin 
              href='https://www.linkedin.com/in/chandan-choudhury-0809/' 
              target='_blank' 
              aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLinkLinkedin>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
{/* Chandan Choudhury */}