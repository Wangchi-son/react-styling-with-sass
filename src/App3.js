import React from 'react';
import styled from 'styled-components';
import Button2 from './components/Button2';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App3() {
  return (
    <AppBlock>
      <Button2>BUTTON</Button2>
    </AppBlock>
  );
}

export default App3;
