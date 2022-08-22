import { Link, useParams } from "react-router-dom";
import { Container, Breadcrumb, Icon } from "semantic-ui-react";
import IntroBanner from "../components/IntroBanner";

import PageTitle from "../components/PageTitle";

import industry from "../industry.json";

const Industry = () => {
  const slug = useParams();

  PageTitle(`${slug.slug}`);

  let data;

  if (slug.slug === "commercial-real-estate") {
    data = industry[0];
  } else if (slug.slug === "construction") {
    data = industry[1];
  } else if (slug.slug === "distribution-&-logistics") {
    data = industry[2];
  } else if (slug.slug === "education") {
    data = industry[3];
  } else if (slug.slug === "healthcare") {
    data = industry[4];
  } else if (slug.slug === "finance") {
    data = industry[5];
  } else if (slug.slug === "hotel-&-hospitality") {
    data = industry[6];
  } else if (slug.slug === "residential") {
    data = industry[7];
  } else if (slug.slug === "retail") {
    data = industry[8];
  } else if (slug.slug === "transport") {
    data = industry[9];
  } else if (slug.slug === "manufacturing-&-industrial") {
    data = industry[10];
  } else if (slug.slug === "high-tech-&-telecom") {
    data = industry[11];
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
            <Breadcrumb.Section link as={Link} to={"/industries"}>
              Industries
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>{data.title}</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* intro */}
      <IntroBanner
        image={data.image_one}
        header={data.header_one}
        caption={data.caption_one}
      />
      {/* intro */}

      {/* outro */}
      <IntroBanner
        image={data.image_two}
        header={data.header_two}
        caption={data.caption_two}
      />
      {/* outro */}
    </div>
  );
};

export default Industry;
