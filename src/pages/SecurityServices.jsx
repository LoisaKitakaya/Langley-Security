import { Container, Breadcrumb, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import PageTitle from "../PageTitle";
import IntroBanner from "../components/IntroBanner";
import IntroBannerReverse from "../components/IntroBannerReverse";

let imageOne =
  "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let imageTwo =
  "https://images.pexels.com/photos/3868576/pexels-photo-3868576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let headerOne = "Commercial Security Services";
let headerTwo = "Custom Business Security Services";
let captionOne =
  "Allied Universal®, a leading security and facility services company, provides proactive security services and cutting-edge smart technology to deliver evolving, tailored solutions that allow clients to focus on their core business.";
let captionTwo =
  "Our excellence starts with our local leadership and local presence. In fact, in North America alone, we have an extensive network of offices to support our local communities and customers. We take pride in our extensive knowledge in a range of specialty sectors such as education, healthcare, retail, commercial real estate, government and corporate campuses, etc. We believe there is no greater purpose than serving and safeguarding customers, communities and people in today’s world. Allied Universal is There for you®.";

const SecurityServices = () => {
  PageTitle("Security services");

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
            <Breadcrumb.Section active>Services</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Security services </Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* intro */}
      <IntroBanner image={imageOne} header={headerOne} caption={captionOne} />
      {/* intro */}

      {/* security services */}
      <div className="has-background-dark has-text-light p-6 mb-6 reframe-2"></div>
      {/* security services */}

      {/* outro */}
      <IntroBannerReverse
        image={imageTwo}
        header={headerTwo}
        caption={captionTwo}
      />
      {/* outro */}
    </div>
  );
};

export default SecurityServices;
