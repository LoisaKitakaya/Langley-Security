import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Sidebar, Menu, Icon } from "semantic-ui-react";

import "../global/css/layout.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="global has-background-dark">
      {/* navbar */}
      <Container>
        <nav
          className="navbar is-dark mr-3 ml-3 reframe"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to={"/"} className="navbar-item">
              <h1 className="is-size-4">Langley Security</h1>
            </Link>

            <button
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => setVisible(true)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable pb-1">
                <a className="navbar-link" href="#about-us">
                  About us
                </a>

                <div className="navbar-dropdown has-background-light">
                  <a href="/why-us" className="navbar-item navbar-h-item">
                    Why us
                  </a>
                  <a href="/what-we-do" className="navbar-item navbar-h-item">
                    What we do
                  </a>
                  <a href="/who-we-are" className="navbar-item navbar-h-item">
                    Who we are
                  </a>
                  <a
                    href="/business-leadership-team"
                    className="navbar-item navbar-h-item"
                  >
                    Leadership team
                  </a>
                  <a
                    href="/board-of-directors"
                    className="navbar-item navbar-h-item"
                  >
                    Board of directors
                  </a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable pb-1">
                <a className="navbar-link" href="#services">
                  Our services
                </a>

                <div className="navbar-dropdown has-background-light">
                  <a
                    href="/security-services"
                    className="navbar-item navbar-h-item"
                  >
                    Security services
                  </a>
                  <a
                    href="/technology-services"
                    className="navbar-item navbar-h-item"
                  >
                    Technology services
                  </a>
                  <a
                    href="/professional-services"
                    className="navbar-item navbar-h-item"
                  >
                    Professional services
                  </a>
                </div>
              </div>
              <Link to={"/industries"} className="navbar-item">
                Industries
              </Link>
              <Link to={"/resource-center"} className="navbar-item">
                Resource Center
              </Link>
              <Link to={"/contact-us"} className="navbar-item">
                Contact us
              </Link>
            </div>
          </div>
        </nav>
      </Container>
      {/* navbar */}

      {/* sidebar */}
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
      >
        <Menu.Item as={Link} to={"/"} header onClick={() => setVisible(false)}>
          <Icon name="home" size="mini" />
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/contact-us"}
          onClick={() => setVisible(false)}
        >
          <Icon name="phone" size="mini" />
          Contact us
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/resource-center"}
          onClick={() => setVisible(false)}
        >
          <Icon name="file alternate" size="mini" />
          Resource Center
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/industries"}
          onClick={() => setVisible(false)}
        >
          <Icon name="industry" size="mini" />
          Industries
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/security-services"}
          onClick={() => setVisible(false)}
        >
          <Icon name="user secret" size="mini" />
          Security services
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/technology-services"}
          onClick={() => setVisible(false)}
        >
          <Icon name="computer" size="mini" />
          Technology services
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/professional-services"}
          onClick={() => setVisible(false)}
        >
          <Icon name="chess" size="mini" />
          Professional services
        </Menu.Item>
        <Menu.Item as={Link} to={"/why-us"} onClick={() => setVisible(false)}>
          <Icon name="question" size="mini" />
          Why us
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/who-we-are"}
          onClick={() => setVisible(false)}
        >
          <Icon name="question" size="mini" />
          Who we are
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/what-we-do"}
          onClick={() => setVisible(false)}
        >
          <Icon name="question" size="mini" />
          What we do
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/board-of-directors"}
          onClick={() => setVisible(false)}
        >
          <Icon name="users" size="mini" />
          Board of directors
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/business-leadership-team"}
          onClick={() => setVisible(false)}
        >
          <Icon name="users" size="mini" />
          Business leadership team
        </Menu.Item>
      </Sidebar>
      {/* sidebar */}
    </div>
  );
};

export default Navbar;
