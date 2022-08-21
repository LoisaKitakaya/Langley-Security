import { Container, Image } from "semantic-ui-react";

const IntroBanner = ({ image, header, caption }) => {
  return (
    <Container>
      <div className="is-flex intro-container has-background-light mb-6 card-shadow rounded">
        {/* iframe for responsive behavior */}
        <div className="mobile-player">
          <Image src={image} fluid className="img-dimensions img-borders" />
        </div>
        {/* iframe for responsive behavior */}
        <div className="intro-content">
          <h1 className="is-size-1 ml-6 mt-6 reframe">{header}</h1>
          <p className="is-size-5 m-6 pb-3 reframe">{caption}</p>
        </div>
      </div>
    </Container>
  );
};

export default IntroBanner;
