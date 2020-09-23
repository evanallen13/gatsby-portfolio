import React from 'react'
import styled from 'styled-components';
const Footer = () => {
    return (
        <FooterDiv>
                <FooterA href='https://github.com/evanallen13' target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-github-square fa-4x" style={{color: '#ef5939'}}></i>
                </FooterA>
                <FooterA href='tel:7142642562' target='_blank' rel="noopener noreferrer">
                    <i className="fas fa-phone-square-alt fa-4x" style={{color: '#ef5939'}}></i>
                </FooterA>
                <FooterA href='mailto:evanallen13@gmail.com' target='_blank' rel="noopener noreferrer">
                    <i  className="fas fa-envelope-square fa-4x" style={{color: '#ef5939'}}></i>
                </FooterA>
                <FooterA href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-4x" style={{color: '#ef5939'}}></i>   
                </FooterA>
        </FooterDiv>

    )
}

const FooterDiv = styled.div`
    position: absolute;
    bottom: 30px;
    width: 100%;
    height: 2.5rem;  
`

const FooterA = styled.a`
    margin : 0 10px 0 10px
`

// .contact a{
//     margin : 0 15px 0 15px
// }

export default Footer;