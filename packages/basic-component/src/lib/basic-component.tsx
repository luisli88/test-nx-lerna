import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BasicComponentProps {}

const StyledBasicComponent = styled.div`
  color: pink;
`;

export function BasicComponent(props: BasicComponentProps) {
  return (
    <StyledBasicComponent>
      <h1>Welcome to BasicComponent!</h1>
    </StyledBasicComponent>
  );
}

export default BasicComponent;
