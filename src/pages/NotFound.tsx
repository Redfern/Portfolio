import { Link } from "react-router";
import styled from "styled-components";

const NotFoundStyles = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const NotFound = () => {
  return (
    <NotFoundStyles>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </NotFoundStyles>
  );
};

export default NotFound;
