import { Container, Breadcrumb, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../pages/css/pages.css";

import PageTitle from "../components/PageTitle";

const WhyUs = () => {
  PageTitle("Why us");

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
            <Breadcrumb.Section active>Why us</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* Why us */}
      <Container>
        <div className="mb-3 box has-background-light card-shadow">
          <h3 className="is-size-3">
            Why us should i choose Langley Security?
          </h3>
          <Divider />
          <p className="is-size-5">
            Are you looking for a security company to take care of your security
            needs so that you can focus on your business?
            <br />
            <br />
            Here are some reasons why clients choose Langley Security Group:
          </p>
          <ul className="pr-6 pl-6 is-size-5">
            <br />
            <li>
              <strong>Ease of doing business with:</strong> Benefit from devoted
              branch leaders, client managers, field managers, operations
              managers, trainers and recruiters, as well as sophisticated
              scheduling and payroll systems.
            </li>
            <br />
            <li>
              <strong>Unprecedented transparency:</strong> Get insight into our
              services delivered through our local teams, operational business
              reviews, and elevated technology like our sophisticated business
              intelligence and AI workforce management tools.
            </li>
            <br />
            <li>
              <strong>The best hires for you:</strong> Our expansive recruiting
              network and sophisticated hiring tools support you with the right,
              qualified staff.
            </li>
            <br />
            <li>
              <strong>Safety:</strong> Our team of Security Professionals are
              trained to help you mitigate risk.
            </li>
            <br />
            <li>
              <strong>Visibility:</strong> We provide peace of mind and are able
              to help reduce incidents.
            </li>
            <br />
          </ul>
          <Divider />
          <h3 className="is-size-3">
            Benefits of working with Langley Security Group
          </h3>
          <Divider />
          <div className="is-flex mb-3 pt-1 pb-1 pitch-container">
            <div className="has-text-centered m-1 has-background-dark box has-text-light benefits-container">
              <Icon name="check circle" className="is-size-1" />
              <br />
              <br />
              <h3 className="is-size-3">Quality Personnel</h3>
              <br />
              <p>
                We provide Security Professionals trained for defense sector
                related tasks
              </p>
            </div>
            <div className="has-text-centered m-1 has-background-dark box has-text-light benefits-container">
              <Icon name="shield" className="is-size-1" />
              <br />
              <br />
              <h3 className="is-size-3">Guaranteed Safety</h3>
              <br />
              <p>
                We keep your business safe and secure while helping to mitigate
                risk and safeguard assets
              </p>
            </div>
            <div className="has-text-centered m-1 has-background-dark box has-text-light benefits-container">
              <Icon name="book" className="is-size-1" />
              <br />
              <br />
              <h3 className="is-size-3">Expert Training</h3>
              <br />
              <p>
                We provide top-of-the-line training in defense security
                services, access control and management
              </p>
            </div>
            <div className="has-text-centered m-1 has-background-dark box has-text-light benefits-container">
              <Icon name="thumbs up" className="is-size-1" />
              <br />
              <br />
              <h3 className="is-size-3">Quality of Life</h3>
              <br />
              <p>
                We help you monitor and reduce noise levels, identify domestic
                concerns and reduce property crimes
              </p>
            </div>
            <div className="has-text-centered m-1 has-background-dark box has-text-light benefits-container">
              <Icon name="cogs" className="is-size-1" />
              <br />
              <br />
              <h3 className="is-size-3">Customized Solutions</h3>
              <br />
              <p>
                We develop solutions for the specific needs of your site
                security to minimize disruption and risk
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* why us */}
    </div>
  );
};

export default WhyUs;
