import { Container } from "semantic-ui-react";

import PageTitle from "../components/PageTitle";

import "../pages/css/Home.css";

const Home = () => {
  PageTitle("Home");

  return (
    <div className="page">
      <Container>
        <p>This is the home page</p>
      </Container>
    </div>
  );
};

export default Home;
