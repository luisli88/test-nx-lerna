import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestComponentProps { }

const StyledTestComponent = styled.div`
  color: pink;
`;

export function TestComponent(props: TestComponentProps) {
  return (
    <StyledTestComponent>
      <h1>Welcome to TestComponent Storybook!</h1>
    </StyledTestComponent>
  );
}

export default TestComponent;
