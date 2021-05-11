import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaVk, FaYoutube } from 'react-icons/fa';
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
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
           <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of Service </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Requests </FooterLinkTitle>
                                <FooterLink to="/ "> Submit Request </FooterLink>
                                <FooterLink to="/ "> Ambassadors </FooterLink>
                                <FooterLink to="/ "> Agency </FooterLink>
                                <FooterLink to="/ "> Influencer </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to="/ "> Contact </FooterLink>
                                <FooterLink to="/ "> Support </FooterLink>
                                <FooterLink to="/ "> Destinations </FooterLink>
                                <FooterLink to="/ "> Sponsorship </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/ "> Facebook </FooterLink>
                                <FooterLink to="/ "> VK </FooterLink>
                                <FooterLink to="/ "> Twitter </FooterLink>
                                <FooterLink to="/ "> YouTube </FooterLink>
                                <FooterLink to="/ "> Instagram </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            logo
                        </SocialLogo>
                        <WebsiteRights>grainunitscalculator © {new Date().getFullYear()} 
                         All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="VK">
                                <FaVk />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>   
            </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer
