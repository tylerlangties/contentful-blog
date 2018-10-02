import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
background: #524763;
display: flex;
justify-content: center;
align-items: center;
height: 15vh;
margin: 0;
ul {
   justify-content: space-around;
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
   }
}
`;

const Footer = () => (
   <FooterWrapper>
      <ul>
         <li>
            <p>Footer</p>
         </li>
         <li>
         <p>Footer</p>
         </li>
         <li>
         <p>Footer</p>
         </li>
      </ul>
   </FooterWrapper>
)

export default Footer;