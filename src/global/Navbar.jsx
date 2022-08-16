import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Sidebar, Menu, Icon } from "semantic-ui-react";

import "../global/css/Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="global has-background-dark">
      {/* navbar */}
      <Container>
        <nav
          className="navbar is-dark"
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
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="#about-us">
                  About us
                </a>

                <div className="navbar-dropdown">
                  <Link to={"/who-we-are"} className="navbar-item">
                    Who we are
                  </Link>
                  <Link to={"/what-we-do"} className="navbar-item">
                    What we do
                  </Link>
                  <Link to={"/board-of-directors"} className="navbar-item">
                    Board of directors
                  </Link>
                  <Link
                    to={"/business-leadership-team"}
                    className="navbar-item"
                  >
                    Leadership team
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="#services">
                  Our services
                </a>

                <div className="navbar-dropdown">
                  <Link to={"/security-services"} className="navbar-item">
                    Security services
                  </Link>
                  <Link to={"/technology-services"} className="navbar-item">
                    Technology services
                  </Link>
                  <Link to={"/professional-services"} className="navbar-item">
                    Professional services
                  </Link>
                </div>
              </div>
              <Link to={"/media-center"} className="navbar-item">
                Media center
              </Link>
              <Link to={"/why-us"} className="navbar-item">
                Why us
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
        <Menu.Item as="a" header onClick={() => setVisible(false)}>
          <Link to={"/"}>
            <Icon name="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"/services"}>Our services</Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"/media-center"}>Media center</Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"/why-us"}>Why us</Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"contact-us"}>Contact us</Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"who-we-are"}>Who we are</Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"what-we-do"}>What we do</Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"/board-of-directors"}>Board of directors</Link>
        </Menu.Item>
        <Menu.Item as="a" onClick={() => setVisible(false)}>
          <Link to={"/business-leadership-team"}>Business leadership team</Link>
        </Menu.Item>
      </Sidebar>
      {/* sidebar */}
    </div>
  );
};

export default Navbar;
