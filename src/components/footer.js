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
      <div>
         <p>&copy; Copyright 2018 Your Name | Created with Gatsby and Contentful</p>
      </div>
   </FooterWrapper>
)

export default Footer;