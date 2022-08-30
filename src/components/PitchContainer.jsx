import { Container, Icon } from "semantic-ui-react";

const PitchContainer = () => {
  return (
    <Container>
      <div className="has-background-light is-flex mb-6 p-6 pitch-container">
        <div className="has-text-centered m-4 has-background-dark box has-text-light card-shadow">
          <Icon name="handshake" size="huge" />
          <br />
          <br />
          <h3 className="is-size-3">United in our mission</h3>
          <br />
          <p>
            Be the most trusted corporate service partner in a world of evolving
            risk. And when we make that promise to you, we live it out in our
            deeds and actions, every day.
          </p>
          <br />
          <a href="/contact-us" className="button is-red btn-fluid">
            <strong>Contact us</strong> <Icon name="phone" />
          </a>
        </div>
        <div className="has-text-centered m-4 has-background-dark box has-text-light card-shadow">
          <Icon name="map marker alternate" size="huge" />
          <br />
          <br />
          <h3 className="is-size-3">Your local service provider</h3>
          <br />
          <p>
            With local branches across Kenya, we're committed to securing your
            neighborhoods and communities, for better living. Find your local
            office here.
          </p>
          <br />
          <a href="/locations" className="button is-red btn-fluid">
            <strong>Locations</strong> <Icon name="map" />
          </a>
        </div>
        <div className="has-text-centered m-4 has-background-dark box has-text-light card-shadow">
          <Icon name="users" size="huge" />
          <br />
          <br />
          <h3 className="is-size-3">Join our ever growing team</h3>
          <br />
          <p>
            Come be a part of a network of skilled professionals and experts
            working together to make the world a safer place. Refer a friend,
            family member or neighbor today.
          </p>
          <br />
          <a href="/careers" className="button is-red btn-fluid">
            <strong>Careers</strong> <Icon name="briefcase" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default PitchContainer;
