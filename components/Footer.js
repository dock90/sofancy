import styled from 'styled-components';
import media from './styled/Media';

const FooterWrapper = styled.div`
  text-align: center;
  padding: 100px 45px 20px 45px;
  background: rgb(250, 250, 250) none repeat scroll 0% 0%;
  font-weight: 500;
`;

const FooterIntro = styled.h2`
  text-transform: uppercase;
  font-family: 'Roboto', Oxygen, Ubuntu, 'Open Sans', sans-serif;
  font-size: 4rem;
  text-align: left;
  color: rgb(76, 79, 90);

  ${media.phone`
    line-height: 4rem;
  `}
`;

const ContactInfo = styled.p`
  text-align: left;
  font-size: 1.1rem;
  color: rgb(76, 79, 90);
  line-height: 1.3em;
  padding-top: 20px;
  font-family: Roboto, Oxygen, Ubuntu, 'Open Sans', sans-serif;
`;

const Footer = () => (
  <FooterWrapper>
    {/* <FooterIntro>Say Hello</FooterIntro> */}
    <ContactInfo>
      Currently Located At:
      <br />
      The Candy Factory
    </ContactInfo>
    <ContactInfo>
      342 N Queen St, Rear
      <br />
      Warehouse D
      <br />
      Lancaster, PA 17603
    </ContactInfo>
    <ContactInfo>
      edward@dock90.io
      <br />
    </ContactInfo>
  </FooterWrapper>
);

export default Footer;
