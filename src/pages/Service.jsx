import { Link, useParams } from "react-router-dom";
import { Container, Breadcrumb, Icon } from "semantic-ui-react";

import IntroBanner from "../components/IntroBanner";
import IntroBannerReverse from "../components/IntroBannerReverse";
import service from "../services.json";

import PageTitle from "../PageTitle";

const Service = () => {
  const slug = useParams();

  PageTitle(`${slug.slug}`);

  let data;

  if (slug.slug === "security-services") {
    data = service[0];
  } else if (slug.slug === "technology-services") {
    data = service[1];
  } else if (slug.slug === "professional-services") {
    data = service[2];
  }

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
      <IntroBanner
        image={data.imageOne}
        header={data.headerOne}
        caption={data.captionOne}
      />
      {/* intro */}

      {/* security services */}
      <div className="has-background-dark has-text-light p-6 mb-6 reframe-2"></div>
      {/* security services */}

      {/* outro */}
      <IntroBannerReverse
        image={data.imageTwo}
        header={data.headerTwo}
        caption={data.captionTwo}
      />
      {/* outro */}
    </div>
  );
};

export default Service;