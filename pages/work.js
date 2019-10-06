import styled from 'styled-components';
import withLayout from '../lib/withLayout';

const Action = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Work = () => (
  <Action>
    <h2>Coming Soon.</h2>
  </Action>
);

export default withLayout(Work);
