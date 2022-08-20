import { Container, Tab } from "semantic-ui-react";
import AllArticles from "../components/AllArticles";
import AllNews from "../components/AllNews";

import "../pages/css/pages.css";

const panes = [
  {
    menuItem: "News feed",
    render: () => (
      <Tab.Pane attached={false}>
        <AllNews />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Blog & articles",
    render: () => (
      <Tab.Pane attached={false}>
        <AllArticles />
      </Tab.Pane>
    ),
  },
];

const ResourceCenter = () => {
  return (
    <div className="page">
      {/* menu */}
      <Container>
        <div className="p-3 mt-6 mb-6 card-shadow rounded has-background-light">
          <h3 className="is-size-3 has-text-centered mb-3">
            Resource Center
          </h3>
          <Tab
            menu={{
              pointing: true,
              color: "grey",
              inverted: true,
              attached: false,
              tabular: false,
            }}
            panes={panes}
          />
        </div>
      </Container>
      {/* menu */}
    </div>
  );
};

export default ResourceCenter;
