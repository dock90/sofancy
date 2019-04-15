import styled from 'styled-components';

const Action = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const ActionItem = styled.h1`
  font-size: 100px;
`;

const Start = () => (
  <Action>
    <h2>Send a message:</h2>
    <ActionItem>hello@dock90.io</ActionItem>
  </Action>
);

export default Start;
