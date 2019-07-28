import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { Button } from '@mono/ui';

const Container = styled.div`
  ${tw`bg-white min-h-screen flex items-center justify-center`}
`;

const App: React.FC = () => {
  return (
    <Container>
      <Button className="test-2">My Button</Button>
    </Container>
  );
};

export default App;
