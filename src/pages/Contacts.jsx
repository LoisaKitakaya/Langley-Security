import {
  Container,
  Breadcrumb,
  Card,
  Icon,
  Button,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../pages/css/pages.css";

import ContactForm from "../components/ContactForm";
import IntroBanner from "../components/IntroBanner";
import IntroBannerReverse from "../components/IntroBannerReverse";

let imageOne =
  "https://images.pexels.com/photos/230557/pexels-photo-230557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let imageTwo =
  "https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
      <IntroBanner
        header={"Contact us"}
        image={imageTwo}
        caption={
          "Contact us to discuss custom solutions for your organization."
        }
      />
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
      <IntroBannerReverse
        header={"Contact us"}
        image={imageOne}
        caption={
          "Contact us to discuss custom solutions for your organization."
        }
      />
      {/* intro */}
    </div>
  );
};

export default Contacts;
