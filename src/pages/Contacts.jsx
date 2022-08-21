import {
  Container,
  Breadcrumb,
  Image,
  Card,
  Icon,
  Button,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../pages/css/pages.css";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
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
            <Breadcrumb.Section active>Contact us</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* intro */}
      <Container>
        <div className="is-flex intro-container has-background-light mb-6 card-shadow rounded">
          {/* iframe for responsive behavior */}
          <div className="mobile-player">
            <Image
              src="https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fluid
              className="img-dimensions img-borders"
            />
          </div>
          {/* iframe for responsive behavior */}
          <div className="intro-content">
            <h1 className="is-size-1 ml-6 mt-6 reframe">Contact us</h1>
            <p className="is-size-5 m-6 pb-3 reframe">
              Contact us to discuss custom solutions for your organization
            </p>
          </div>
        </div>
      </Container>
      {/* intro */}

      {/* contact forms */}
      <div className="has-background-dark has-text-light p-6 mb-6 reframe-2">
        <Container>
          <div class="columns is-mobile contact-container">
            <div class="column">
              <Card className="has-background-light contact-card card-shadow">
                <Card.Content header="Langley Security contacts" />
                <Card.Content>
                  <Card.Description>
                    <p>
                      Are you an Langley Security client with questions about
                      your account?
                    </p>
                    <br />
                    <p>
                      <Icon name="phone" /> +254 725 131 828
                    </p>
                    <p>
                      <Icon name="mail" /> kitakayaloisa@gmail.com
                    </p>
                  </Card.Description>
                </Card.Content>
              </Card>
              <br />
              <Card className="has-background-light contact-card card-shadow">
                <Card.Content header="Work at Langley Security" />
                <Card.Content>
                  <Card.Description>
                    <p>
                      Start your phenomenal career with Langley Security today!
                    </p>
                    <br />
                    <div className="is-flex is-justify-content-space-between contact-card-btns">
                      <Button
                        as={Link}
                        to={"/careers"}
                        animated
                        color="red"
                        className="btn-fluid-2"
                      >
                        <Button.Content visible>Careers</Button.Content>
                        <Button.Content hidden>
                          <Icon name="briefcase" />
                        </Button.Content>
                      </Button>
                    </div>
                  </Card.Description>
                </Card.Content>
              </Card>
              <br />
              <Card className="has-background-light contact-card card-shadow">
                <Card.Content header="Industries we serve" />
                <Card.Content>
                  <Card.Description>
                    <p>
                      Check out the industries we serve and see how we can help.
                    </p>
                    <br />
                    <div className="is-flex is-justify-content-space-between contact-card-btns">
                      <Button
                        as={Link}
                        to={"/industries"}
                        animated
                        color="red"
                        className="btn-fluid-2"
                      >
                        <Button.Content visible>Industries</Button.Content>
                        <Button.Content hidden>
                          <Icon name="industry" />
                        </Button.Content>
                      </Button>
                    </div>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
            <div class="column is-8">
              <div className="box has-background-light card-shadow">
                <h3 className="is-size-3 mb-3">There for you</h3>
                <p className="mb-3">
                  Submit the form to speak with a member of our team regarding
                  security services, technology services, janitorial services,
                  event services, risk advisory and consulting services,
                  executive protection and intelligence services, or staffing
                  services.
                </p>
                <Divider />
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* contact forms */}

      {/* intro */}
      <Container>
        <div className="is-flex is-flex-direction-row-reverse intro-container has-background-light mb-6 card-shadow rounded">
          {/* iframe for responsive behavior */}
          <div className="mobile-player">
            <Image
              src="https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fluid
              className="img-dimensions img-borders-reverse"
            />
          </div>
          {/* iframe for responsive behavior */}
          <div className="intro-content">
            <h1 className="is-size-1 ml-6 mt-6 reframe">Contact us</h1>
            <p className="is-size-5 m-6 pb-3 reframe">
              Contact us to discuss custom solutions for your organization
            </p>
          </div>
        </div>
      </Container>
      {/* intro */}
    </div>
  );
};

export default Contacts;
