import { Link } from "react-router-dom";
import { Container, Breadcrumb, Icon, Divider } from "semantic-ui-react";
import CareersContainer from "../components/CareersContainer";
import IntroBanner from "../components/IntroBanner";
import IntroBannerReverse from "../components/IntroBannerReverse";

import PageTitle from "../PageTitle";

let imageOne =
  "https://images.pexels.com/photos/11965505/pexels-photo-11965505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let imageTwo =
  "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let headerOne = "Langley Security";
let headerTwo = "Our History";
let captionOne =
  "We are Kenya's leading security and facility services provider. At Langley Security, we pride ourselves on fostering a promote from within culture. There are countless examples of individuals who began their career as Security Professionals and today hold positions on our senior leadership team.";
let captionTwo =
  "Today, as a leader in integrated security solutions, Langley Security has grown organically. Throughout this journey, Langley Security continues to expand its suite of services and geographic markets to offer proactive security services and cutting-edge smart technology to its base of clients.";

const Careers = () => {
  PageTitle("Careers");

  return (
    <div className="page">
      {/* breadcrumb */}
      <Container>
        <div className="mt-3 mb-3 ml-3">
          <Breadcrumb>
            <Breadcrumb.Section link as={Link} to={"/"}>
              <Icon name="home" /> Home
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Careers</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* intro */}
      <Container>
        <IntroBanner image={imageOne} header={headerOne} caption={captionOne} />
      </Container>
      {/* intro */}

      {/* careers */}
      <div className="has-background-dark has-text-light p-6 mb-6 reframe-2">
        <Container>
          <h3 className="is-size-3 mb-3 has-text-centered">
            Careers at Langley Security
          </h3>
          <p className="mb-3 has-text-centered">
            Start your phenomenal career with Langley Security today!
          </p>
          <Divider />
          <CareersContainer />
        </Container>
      </div>
      {/* careers */}

      {/* outro */}
      <Container>
        <IntroBannerReverse
          image={imageTwo}
          header={headerTwo}
          caption={captionTwo}
        />
      </Container>
      {/* outro */}
    </div>
  );
};

export default Careers;
