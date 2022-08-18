import { Link } from "react-router-dom";
import { Container, Button, Icon } from "semantic-ui-react";
import ImageGallery from "react-image-gallery";

import ReactPlayer from "react-player";

import PageTitle from "../components/PageTitle";
import NewsFeed from "../components/NewsFeed";

import "../pages/css/Home.css";

const images = [
  {
    original:
      "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This is the description for this image",
  },
  {
    original:
      "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This is the description for this image",
  },
  {
    original:
      "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This is the description for this image",
  },
];

const Home = () => {
  PageTitle("Home");

  return (
    <div className="page">
      {/* intro */}
      <Container>
        <div className="is-flex intro-container mt-6 mb-6 card-setting">
          <div>
            <ReactPlayer url="https://vimeo.com/255170713" />
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

      {/* slider */}
      <div className="has-background-dark has-text-light pt-6 pb-6 mb-6">
        <h2 className="is-size-2 has-text-centered mb-6">
          Welcome to Langley Security Group
        </h2>
        <ImageGallery items={images} />
      </div>
      {/* slider */}

      {/* pitch */}
      <Container>
        <div className="has-background-light is-flex mb-6 p-6 card-setting">
          <div className="has-text-centered m-4 has-background-dark box has-text-light">
            <Icon name="handshake" size="huge" />
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
          <div className="has-text-centered m-4 has-background-dark box has-text-light">
            <Icon name="map marker alternate" size="huge" />
            <br />
            <br />
            <h3 className="is-size-3">Your local service provider</h3>
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
          <div className="has-text-centered m-4 has-background-dark box has-text-light">
            <Icon name="users" size="huge" />
            <br />
            <br />
            <h3 className="is-size-3">Join our ever growing team</h3>
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

      {/* services overview */}
      <div className="has-background-dark has-text-light pt-6 pb-6 mb-6">
        <div className="has-text-centered pb-4">
          <h2 className="is-size-2">Scalable, End-to-End Solutions</h2>
          <br />
          <p className="pinch is-size-6">
            Langley Security provides integrated security services that combine
            security personnel, technology, and a variety of professional
            services, to give our clients a flexible and scalable approach to
            securing their businesses.
          </p>
        </div>
        <Container>
          <div className="is-flex is-justify-content-space-between">
            <div className="card m-3 has-background-light card-setting">
              <div className="card-image">
                <img
                  className="image"
                  src="https://images.pexels.com/photos/13169815/pexels-photo-13169815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h3 className="is-size-3">Security services</h3>
                <br />
                <Link to={"/security-services"} className="button is-danger">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="card m-3 has-background-light card-setting">
              <div className="card-image">
                <img
                  className="image"
                  src="https://images.pexels.com/photos/13169815/pexels-photo-13169815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h3 className="is-size-3">Technology services</h3>
                <br />
                <Link to={"/technology-services"} className="button is-danger">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="card m-3 has-background-light card-setting">
              <div className="card-image">
                <img
                  className="image"
                  src="https://images.pexels.com/photos/13169815/pexels-photo-13169815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h3 className="is-size-3">Professional services</h3>
                <br />
                <Link
                  to={"/professional-services"}
                  className="button is-danger"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* services overview */}

      {/* resources */}
      <Container>
        <div className="is-flex mb-6 p-6 has-background-light card-setting">
          <div className="has-text-centered m-4 box has-background-dark has-text-light pinch-2">
            <h3 className="is-size-3">The State of Security Today</h3>
            <br />
            <p>
              As situations change and challenges evolve, Langley Security is
              staying one step ahead with new learnings and insights. Check out
              our resources.
            </p>
            <br />
            <Link to={"/media-center"} className="button is-danger">
              Resources
            </Link>
          </div>
          <div className="has-text-centered m-4 box has-background-dark has-text-light pinch-2">
            <h3 className="is-size-3">Vertically Focused Solutions</h3>
            <br />
            <p>
              Our category-specific industry expertise allows Langley Security
              to give businesses and individuals across various sectors targeted
              solutions to their security challenges.
            </p>
            <br />
            <Link to={"/careers"} className="button is-danger">
              Careers
            </Link>
          </div>
        </div>
      </Container>
      {/* resources */}

      {/* outro */}
      <Container>
        <div className="is-flex mb-6 has-background-light card-setting">
          <div className="outro-container p-6 has-text-light">
            <h3 className="is-size-3">Contact us</h3>
            <br />
            <br />
            <p className="is-size-4">
              Looking for more information? Contact one of our security and
              services experts to see how we can help.
            </p>
            <br />
            <br />
            <Link to={"/contact-us"} className="button is-danger">
              Contact us
            </Link>
          </div>
          <div className="news-container p-6">
            <h3 className="is-size-3">News</h3>
            <br />
            <NewsFeed />
          </div>
        </div>
      </Container>
      {/* outro */}
    </div>
  );
};

export default Home;
