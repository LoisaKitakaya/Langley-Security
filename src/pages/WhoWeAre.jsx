import { Container, Breadcrumb, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../pages/css/pages.css";
import IntroBanner from "../components/IntroBanner";
import IntroBannerReverse from "../components/IntroBannerReverse";
import PageTitle from "../PageTitle";

let imageOne =
  "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let imageTwo =
  "https://images.pexels.com/photos/11965505/pexels-photo-11965505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let headerOne = "Langley Security";
let headerTwo = "Our History";
let captionOne =
  "Since 2018, we have been keeping people safe, protecting our clients' brands, and providing peace of mind.";
let captionTwo =
  "Today, as a leader in integrated security solutions, Langley Security has grown organically. Throughout this journey, Langley Security continues to expand its suite of services and geographic markets to offer proactive security services and cutting-edge smart technology to its base of clients.";

const WhoWeAre = () => {
  PageTitle("Who we are");

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
            <Breadcrumb.Section active>About us</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Who we are</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* intro */}
      <IntroBanner image={imageOne} header={headerOne} caption={captionOne} />
      {/* intro */}

      {/* who we are */}
      <div className="has-background-dark has-text-light p-6 mb-6 reframe-2">
        <Container>
          <Divider />
          <h3 className="is-size-3">Our Story</h3>
          <Divider />
          <p className="is-size-5">
            Incorporated in September 2019 under the Companies Act of 2015,
            Langley Security Group Limited is a private limited company offering
            an array of security services to private and commercial clients in
            Kenya.
          </p>
          <br />
          <p className="is-size-5">
            Langley Security Group Limited is a private limited company offering
            an array of security services to private and commercial clients in
            Kenya.
          </p>
          <br />
          <Divider />
          <div className="ml-3 mr-3 reframe">
            <h4 className="is-size-4">Our vision</h4>
            <Divider />
            <p className="is-size-5">
              Our vision is to be the best security services provider in Kenya
              and the region known and sought after by socially responsible
              clients for our high standards of professionalism, Integrity and
              service.
            </p>
          </div>
          <br />
          <Divider />
          <div className="ml-3 mr-3 reframe">
            <h4 className="is-size-4">Our mission</h4>
            <Divider />
            <p className="is-size-5">
              Our mission is to provide exceptional security services by always
              putting the client first; maintaining clear, continuous
              communication; and remaining true to our guiding principles:
            </p>
            <ul className="is-size-5 ml-6 reframe">
              <br />
              <li>
                <Icon name="long arrow alternate right" /> Honesty towards our
                clients, employees, vendors and partners.
              </li>
              <br />
              <li>
                <Icon name="long arrow alternate right" /> Integrity to honor
                our commitments and always do what we say. 2 Langley Security
                Group Limited
              </li>
              <br />
            </ul>
          </div>
        </Container>
      </div>
      {/* who we are */}

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

export default WhoWeAre;
