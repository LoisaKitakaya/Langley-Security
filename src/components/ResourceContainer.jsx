import { Container, Icon } from "semantic-ui-react";

const ResourceContainer = () => {
  return (
    <Container>
      <div className="is-flex mb-6 p-6 has-background-light resources-container">
        <div className="has-text-centered m-4 box has-background-dark has-text-light pinch-2 card-shadow">
          <h3 className="is-size-3">The State of Security Today</h3>
          <br />
          <p>
            As situations change and challenges evolve, Langley Security is
            staying one step ahead with new learnings and insights. Check out
            our resources.
          </p>
          <br />
          <a href="/resource-center" className="button is-red btn-fluid">
            <strong>Resources</strong> <Icon name="file alternate" />
          </a>
        </div>
        <div className="has-text-centered m-4 box has-background-dark has-text-light pinch-2 card-shadow">
          <h3 className="is-size-3">Vertically Focused Solutions</h3>
          <br />
          <p>
            Our category-specific industry expertise allows Langley Security to
            give businesses and individuals across various sectors targeted
            solutions to their security challenges.
          </p>
          <br />
          <a href="/industries" className="button is-red btn-fluid">
            <strong>Industries</strong> <Icon name="industry" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ResourceContainer;
