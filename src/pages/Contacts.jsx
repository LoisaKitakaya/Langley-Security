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

const Contacts = () => {
  return (
    <div className="page">
      {/* breadcrumb */}
      <Container>
        <div className="mt-3 mb-3 ml-3">
          <Breadcrumb>
            <Breadcrumb.Section link as={Link} to={"/"}>
              Home
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
                <Card.Content header="Langley Security careers" />
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
                <form className="has-background-light has-text-left">
                  <div className="columns">
                    <div class="field column">
                      <label class="label">Name</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                    </div>
                    <div class="field column">
                      <label class="label">Name</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>
                  <div class="field mb-6">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>
                  <div className="columns">
                    <div class="field column">
                      <label class="label">Name</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                    </div>
                    <div class="field column">
                      <label class="label">Name</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div class="field column">
                      <label class="label">Name</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                    </div>
                    <div class="field column">
                      <label class="label">Name</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="field mb-3">
                    <label class="label">Message</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Textarea"
                      ></textarea>
                    </div>
                  </div>
                  <label class="checkbox mb-3">
                    <input type="checkbox" /> I agree to the{" "}
                    <Link to={"/terms-&-conditions"}>terms and conditions</Link>
                  </label>
                  <div class="control">
                    <Button
                      type="submit"
                      animated
                      color="green"
                      className="btn-fluid-2"
                    >
                      <Button.Content visible>Submit</Button.Content>
                      <Button.Content hidden>
                        <Icon name="upload" />
                      </Button.Content>
                    </Button>
                  </div>
                </form>
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
