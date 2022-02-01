import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BasicComponentProps {
  title: string
}

const StyledBasicComponent = styled.div`
  color: pink;
`;

export function BasicComponent(props: BasicComponentProps) {
  const { title } = props;
  return (
    <StyledBasicComponent>
      <h1>Welcome to {title}!</h1>
    </StyledBasicComponent>
  );
}

export default BasicComponent;
