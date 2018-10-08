import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const FooterWrapper = styled.div`
background: #524763;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 25vh;
margin: 0;
div {
   text-align: center;
   p {
      max-width: 960px;
      font-size: .75rem;
   }
}
ul {
   justify-content: center;
   align-items: center;
   height: 100%;
   max-width: 960px;
   margin: 0;
   width: 100%;
   display: flex;
   flex-direction: row;
   list-style: none;
   li {
      color: white;
      margin: 20px;
      &:hover {
         background: #0084b4;
         border-radius: 50px;
      }
   }
}
`;

const Footer = () => (
   <FooterWrapper>
      <ul>
         <li>
         <SocialIcon url="#" color="white" />
         </li>
         <li>
         <SocialIcon url="#" color="white" network="tumblr" />
         </li>
         <li>
         <SocialIcon network="twitter" color="white" url="#" />
         </li>
      </ul>
      <div className="footer__content">
         <p>&copy; Copyright 2018 Your Name | Created with Gatsby and Contentful</p>
      </div>
   </FooterWrapper>
)

export default Footer;