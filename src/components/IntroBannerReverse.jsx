import { Container, Image } from "semantic-ui-react";

const IntroBannerReverse = ({ image, header, caption }) => {
  return (
    <Container>
      <div className="is-flex is-flex-direction-row-reverse intro-container has-background-light mb-6 card-shadow rounded">
        {/* iframe for responsive behavior */}
        <div className="mobile-player">
          <Image src={image} fluid className="img-dimensions img-borders-reverse" />
        </div>
        {/* iframe for responsive behavior */}
        <div className="intro-content">
          <h2 className="is-size-2 ml-6 mt-3 reframe">{header}</h2>
          <p className="is-size-5 ml-6 mr-6 mt-3 reframe">{caption}</p>
        </div>
      </div>
    </Container>
  );
};

export default IntroBannerReverse;
