import styled from "@emotion/styled";

const StyledLayout = styled.div`
  padding: 60px 80px;
  width: 100vw;

  @media (max-width: 810px) {
    padding: 10px 20px 100px 20px;
    height: auto;
  }
`;

const StyledHeading = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 800;
  color: ${(props: any) => props.color};

  &::after {
    content: "";
    width: 8%;
    height: 8px;
    text-align: center;
    position: absolute;
    left: 50%;
    /* top: 50%; */
    transform: translateX(-50%);
    display: block;
    background-color: #00a359;
  }

  @media (max-width: 760px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const Layout = ({
  children,
  heading,
  bg,
  id,
  color,
}: {
  children: any;
  heading: string;
  bg: any;
  id?: string;
  color?: string;
}) => {
  return (
    <StyledLayout id={id} style={{ background: bg }}>
      <StyledHeading color={color ? color : "#000"} data-aos="fade-up">
        {heading}
      </StyledHeading>
      {children}
    </StyledLayout>
  );
};

export default Layout;
