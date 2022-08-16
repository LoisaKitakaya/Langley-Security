import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import ReactPlayer from "react-player/youtube";

import PageTitle from "../components/PageTitle";

import "../pages/css/Home.css";

const Home = () => {
  PageTitle("Home");

  return (
    <div className="page">
      {/* intro */}
      <Container>
        <div className="is-flex intro-container">
          <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
          </div>
          <div className="has-background-light`">
            <div className="intro-content">
              <h1 className="is-size-1">There for you</h1>
              <br />
              <p className="is-size-5">
                Since 2012, we have forged our organization under a single
                purpose: to keep people, businesses, and communities safe so we
                can all thrive together.
              </p>
              <br />
              <Button.Group>
                <Link to={"/who-we-are"} className="button is-danger">
                  Who we are
                </Link>
                <Link to={"/what-we-do"} className="button is-danger">
                  What we do
                </Link>
              </Button.Group>
              <br />
            </div>
          </div>
        </div>
      </Container>
      {/* into */}
    </div>
  );
};

export default Home;
