import styled from "styled-components";

const StyledErrorMessage = styled.div`
  padding: 20px;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #f91889;
`;

const ErrorMessage = ({ message }: { message: string }) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
