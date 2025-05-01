import styled from "styled-components";

const StyledLoading = styled.div`
  padding: 20px;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #f91889;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <span className="loader"></span>
    </StyledLoading>
  );
};

export default Loading;
