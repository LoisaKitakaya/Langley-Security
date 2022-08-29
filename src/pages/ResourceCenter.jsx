import { Container, Tab, Breadcrumb, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import AllArticles from "../components/AllArticles";
import AllNews from "../components/AllNews";
import PageTitle from "../PageTitle";

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
  PageTitle("Resources");

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
            <Breadcrumb.Section active>Resources</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* menu */}
      <Container>
        <div className="p-3 mb-6 card-shadow rounded has-background-light">
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
