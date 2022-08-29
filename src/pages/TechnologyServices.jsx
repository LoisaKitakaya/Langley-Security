import { Container, Breadcrumb, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import PageTitle from "../PageTitle";
import IntroBanner from "../components/IntroBanner";
import IntroBannerReverse from "../components/IntroBannerReverse";

let imageOne =
  "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let imageTwo =
  "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg";
let headerOne = "Security Technology Services";
let headerTwo = "Smart People. Smart Technology. Smarter Deployment.";
let captionOne =
  "When it comes to reducing risk, you need a solution customized to the unique needs of your organization—including your site-specific requirements. With experience and deep industry expertise across a wide array of industries, Allied Universal® is a proven partner to help you safeguard your people, assets, and reputation. By leveraging the right combination of trained security professionals, data and cutting-edge technology, we are able to deploy smarter, more effective security programs for our clients.";
let captionTwo =
  "With customized security solutions ranging from situational awareness and threat intelligence platforms, to remote video and alarm monitoring, to integrated commercial security systems, to web and GPS-based patrol route management, we provide full lifecycle support of leading-edge technology to ensure the safety and security of your personnel and property.";

const TechnologyServices = () => {
  PageTitle("Technology services");

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
            <Breadcrumb.Section active>Technology services </Breadcrumb.Section>
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

export default TechnologyServices;
