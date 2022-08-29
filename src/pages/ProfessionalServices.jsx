import { Container, Breadcrumb, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import PageTitle from "../PageTitle";
import IntroBanner from "../components/IntroBanner";
import IntroBannerReverse from "../components/IntroBannerReverse";

let imageOne =
  "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let imageTwo =
  "https://images.pexels.com/photos/4559589/pexels-photo-4559589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let headerOne = "Risk Advisory and Consulting Services";
let headerTwo = "Executive Protection and Intelligence Services";
let captionOne =
  "Allied Universal® Risk Advisory and Consulting Services combine risk and threat assessment, prevention, and investigative practices developed over more than four decades with the extensive experience and knowledge of industry-leading consultants into a centralized practice with strategic focus on reducing risk. We help customers determine where and when risk is most likely to turn into threat and the most effective means to combat threat—arming organizations with the knowledge to make critical business decisions that ensure better risk management outcomes.";
let captionTwo =
  "Allied Universal® provides comprehensive, global, protection services for 24/7, 365 days a year coverage through our Executive Protection and Intelligence Services division.  Mitigating risks and threats along with extensive intelligence analysis are at the core of all our customized executive protection programs for close protection, secure travel logistics, and related security services for the well-being and productivity of a principal wherever and whenever necessary. Our team of experts average 20+ years of industry experience with diverse backgrounds in corporate security, military, local/federal law enforcement, legal and technology.";

const ProfessionalServices = () => {
  PageTitle("Professional services");

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
            <Breadcrumb.Section active>
              Professional services{" "}
            </Breadcrumb.Section>
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

export default ProfessionalServices;
