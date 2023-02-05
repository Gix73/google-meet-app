import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;
  display: grid;
  background: papayawhip;
  grid-area: main;
  grid-template-columns: 1fr 30px;
`;

const MainChat = () => {
  return (
    <Wrapper>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

export default MainChat;
