import styled from "@emotion/styled";
import Layout from "../Layout/Layout";
import Contact from "../Contact/Contact";
import "./styles.css";

const StyledAboutRight = styled.div`
  flex: 0.6;
  /* justify-content: flex-start; */
  display: flex;
  height: 50vh;
  width: 100vw;
  align-items: center;

  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 2rem;
    color: #000;
  }
  h3 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: justify;
    color: #fff;
  }
  p {
    font-weight: 500;
    font-size: 1rem;
    text-align: justify;
    max-width: 600px;
    color: #fff;
    line-height: 2.2rem;
  }
  .partners {
    padding-top: 5rem;
  }
  h5 {
    color: #777777;
  }
  @media (max-width: 810px) {
    margin-top: 0px;
    width: 100%;

    h3 {
      /* max-width: 300px; */
      text-align: center;
      /* font-size: 12px; */
    }

    .p {
      max-width: 350px;
      margin: auto;
      text-align: center;
    }

    .counsel {
      /* max-width: 300px; */
      text-align: center;
      font-size: 24px;
      word-spacing: -2px !important;
    }
  }
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 0vw; */
  /* flex-direction: row-reverse; */

  .flex-full {
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 0.3;
  }

  @media (max-width: 810px) {
    flex-direction: column;
    transform: translateY(40px);
  }
`;

const Counselling = () => {
  return (
    <Layout bg={"#0a2540"} color={"#fff"} heading={"Counselling"}>
      <StyledFlex>
        <StyledAboutRight data-aos={"fade-up"} data-aos-duration={1500}>
          <h3>
            <span className="access">Access to</span>
            <br />
            <span className="counsel">
              INDIVIDUAL, COUPLES AND TEEN COUNSELLING
            </span>
            <p className="p">
              Complete the form to book for an appointment or call (+234) 803
              713 0048.
            </p>
          </h3>
        </StyledAboutRight>
        <div className="flex-full">
          <Contact />
        </div>
      </StyledFlex>
    </Layout>
  );
};

export default Counselling;
