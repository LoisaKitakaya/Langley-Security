import { Container, Icon } from "semantic-ui-react";

import ImageGallery from "react-image-gallery";

import "../pages/css/pages.css";

import PageTitle from "../PageTitle";
import NewsFeed from "../components/NewsFeed";
import PitchContainer from "../components/PitchContainer";
import ResourceContainer from "../components/ResourceContainer";
import ServicesContainer from "../components/ServicesContainer";
import slider from "../json/slider.json";

const images = slider;

const Home = () => {
  PageTitle("Home");

  return (
    <div className="page">
      {/* intro */}
      <Container>
        <div className="is-flex intro-container has-background-light mt-6 mb-6">
          {/* video for responsive behavior */}
          <div className="mobile-player">
            <video id="video" width="880" height="360" autoplay controls>
              <source
                src="https://res.cloudinary.com/dit0fii18/video/upload/v1583817696/samples/elephants.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* video for responsive behavior */}
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
          <ServicesContainer />
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
            <a href="/contact-us" className="button is-red">
              <strong>Contact us</strong> <Icon name="phone" />
            </a>
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
