import styled from "@emotion/styled";
import ContactForm from "../Form/ContactForm";

/* background-color: ${(props) => props.theme.bg}; */
const AboutStyled = styled.div`
  max-width: 400px;
  width: 400px;
  .div {
    align-items: "flex-start";
    display: flex;

    @media (max-width: 810px) {
      flex-direction: column;
    }
  }

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    height: auto;
  }
`;

/* background-color:${(props) => props.theme.textbg}; */

const StyledContact = styled.div`
  /* max-width: 1000px;
  width: 100%; */
  margin: auto;
  padding: 20px;
  padding-top: 60px;
  color: #fff;
  background-color: #233b66;

  h3 {
    color: #000;
  }
`;

export default function Contact() {
  return (
    <AboutStyled id="Contact">
      {/* <StyledH2>Contact Me</StyledH2> */}

      <StyledContact data-aos={"flip-down"}>
        <ContactForm />
      </StyledContact>
    </AboutStyled>
  );
}
