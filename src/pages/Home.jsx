import { Link } from "react-router-dom";
import { Container, Button, Icon, Popup } from "semantic-ui-react";

import ImageGallery from "react-image-gallery";

import "../pages/css/pages.css";

import PageTitle from "../PageTitle";
import NewsFeed from "../components/NewsFeed";
import PitchContainer from "../components/PitchContainer";
import ResourceContainer from "../components/ResourceContainer";

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
        <div className="is-flex intro-container has-background-light mt-6 mb-6">
          {/* iframe for responsive behavior */}
          <div className="mobile-player">
            <iframe
              title="Flowers"
              src="https://player.vimeo.com/video/707084804?h=c5514b7eb9"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* iframe for responsive behavior */}
          <div className="intro-content">
            <h1 className="is-size-1 ml-6 mt-6 reframe">There for you</h1>
            <br />
            <p className="is-size-5 ml-6 mr-6 pb-3 reframe">
              Since 2012, we have forged our organization under a single
              purpose: to keep people, businesses, and communities safe so we
              can all thrive together.
            </p>
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
      <PitchContainer />
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
          <div className="is-flex is-justify-content-space-between services-container">
            <Popup
              wide
              position="top center"
              content="People, Equipment, and Security Services for Your Organization’s Needs"
              trigger={
                <Link
                  to={"/security-services"}
                  className="card-shadow card-hover m-3"
                >
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="image"
                        src="https://images.pexels.com/photos/13169815/pexels-photo-13169815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                      />
                    </div>
                    <div class="card-content has-background-red">
                      <p class="content has-text-weight-bold has-text-light has-text-centered is-size-5">
                        Security services
                      </p>
                    </div>
                  </div>
                </Link>
              }
            />
            <Popup
              wide
              position="top center"
              content="Innovative Security Technology Solutions"
              trigger={
                <Link
                  to={"/technology-services"}
                  className="card-shadow card-hover m-3"
                >
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="image"
                        src="https://images.pexels.com/photos/13169815/pexels-photo-13169815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                      />
                    </div>
                    <div class="card-content has-background-red">
                      <p class="content has-text-weight-bold has-text-light has-text-centered is-size-5">
                        Technology services
                      </p>
                    </div>
                  </div>
                </Link>
              }
            />
            <Popup
              wide
              position="top center"
              content="Security Risk Assessment and Prevention"
              trigger={
                <Link
                  to={"/professional-services"}
                  className="card-shadow card-hover m-3"
                >
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="image"
                        src="https://images.pexels.com/photos/13169815/pexels-photo-13169815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                      />
                    </div>
                    <div class="card-content has-background-red">
                      <p class="content has-text-weight-bold has-text-light has-text-centered is-size-5">
                        Professional services
                      </p>
                    </div>
                  </div>
                </Link>
              }
            />
          </div>
        </Container>
      </div>
      {/* services overview */}

      {/* resources */}
      <ResourceContainer />
      {/* resources */}

      {/* outro */}
      <Container>
        <div className="is-flex mb-6 has-background-light contact-container">
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
            <Button
              as={Link}
              to={"/contact-us"}
              animated
              color="red"
              className="btn-fluid"
            >
              <Button.Content visible>Contact us</Button.Content>
              <Button.Content hidden>
                <Icon name="phone" />
              </Button.Content>
            </Button>
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
