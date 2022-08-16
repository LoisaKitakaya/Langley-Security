import { Link } from "react-router-dom";
import { Container, Button, Icon } from "semantic-ui-react";
import ReactPlayer from "react-player/youtube";

import PageTitle from "../components/PageTitle";

import "../pages/css/Home.css";

const Home = () => {
  PageTitle("Home");

  return (
    <div className="page">
      {/* intro */}
      <Container>
        <div className="is-flex intro-container mt-6 mb-6 card-setting">
          <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
          </div>
          <div className="has-background-light">
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

      {/* pitch */}
      <Container>
        <div className="has-background-light is-flex mb-6 pt-6 pb-6 card-setting">
          <div className="has-text-centered m-4 pitch-card">
            <Icon name="globe" size="huge" />
            <br />
            <br />
            <h3 className="is-size-3">United in our mission</h3>
            <br />
            <p>
              Be the most trusted corporate service partner in a world of
              evolving risk. And when we make that promise to you, we live it
              out in our deeds and actions, every day.
            </p>
            <br />
            <Link to={"/contact-us"} className="button is-danger">
              Contact us
            </Link>
          </div>
          <div className="has-text-centered m-4 pitch-card">
            <Icon name="eye" size="huge" />
            <br />
            <br />
            <h3 className="is-size-3">Local Service Provider</h3>
            <br />
            <p>
              With local branches across Kenya, we're committed to securing your
              neighborhoods and communities, for better living. Find your local
              office here.
            </p>
            <br />
            <Link to={"/locations"} className="button is-danger">
              Locations
            </Link>
          </div>
          <div className="has-text-centered m-4 pitch-card">
            <Icon name="users" size="huge" />
            <br />
            <br />
            <h3 className="is-size-3">Join Our Team</h3>
            <br />
            <p>
              Come be a part of a network of skilled professionals and experts
              working together to make the world a safer place. Refer a friend,
              family member or neighbor today.
            </p>
            <br />
            <Link to={"/careers"} className="button is-danger">
              Careers
            </Link>
          </div>
        </div>
      </Container>
      {/* pitch */}
    </div>
  );
};

export default Home;
