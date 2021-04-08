import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button2 from './components/Button2';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App3() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button2 color="pink" size="large">
            BUTTON
          </Button2>
          <Button2>BUTTON</Button2>
          <Button2 color="gray" size="small">
            BUTTON
          </Button2>
        </ButtonGroup>
        <ButtonGroup>
          <Button2 color="pink" size="large" outline>
            BUTTON
          </Button2>
          <Button2 outline>BUTTON</Button2>
          <Button2 color="gray" size="small" outline>
            BUTTON
          </Button2>
        </ButtonGroup>
        <ButtonGroup>
          <Button2 color="pink" size="large" fullWidth>
            BUTTON
          </Button2>
          <Button2 size="large" fullWidth>
            BUTTON
          </Button2>
          <Button2 color="gray" size="large" fullWidth>
            BUTTON
          </Button2>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App3;
