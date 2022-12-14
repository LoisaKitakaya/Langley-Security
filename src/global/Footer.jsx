import { Container, Icon } from "semantic-ui-react";

import "../global/css/layout.css";

const Footer = () => {
  return (
    <div className="global has-background-dark">
      {/* footer */}
      <Container>
        <footer className="has-background-dark pt-6 pb-6 mr-3 ml-3 reframe">
          <div className="content is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap">
            <div className="citation-caption">
              <p className="has-text-light">
                <Icon name="copyright outline" /> Langley Security Group 2022.
                All Rights Reserved.
              </p>
            </div>
            <div className="is-flex is-align-items-center">
              <a
                href={"/careers"}
                className="has-text-light is-underlined mr-3"
              >
                Careers
              </a>
              <a
                href={"/privacy-policy"}
                className="has-text-light is-underlined mr-3"
              >
                Privacy policy
              </a>
              <a
                href={"terms-&-conditions"}
                className="has-text-light is-underlined"
              >
                Terms {"&"} conditions
              </a>
            </div>
          </div>
          <div className="content is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap">
            <div className="credits-caption">
              <p className="has-text-light">
                <Icon name="code" /> Developed by{" "}
                <a
                  href="http://freedomloisa.netlify.app/"
                  className="has-text-light is-underlined"
                >
                  Freedom Loisa
                </a>{" "}
                <Icon name="code" />
              </p>
            </div>
            <div className="is-flex is-align-items-center">
              <a
                href="https://wa.me/254720469665"
                className="has-text-light is-size-4"
              >
                <Icon name="whatsapp square" />
              </a>
              <a href="tel:+254720469665" className="has-text-light is-size-4">
                <Icon name="phone square" />
              </a>
              <a
                href="mailto:kitakayaloisa@gmail.com"
                className="has-text-light is-size-4"
              >
                <Icon name="envelope square" />
              </a>
            </div>
          </div>
        </footer>
      </Container>
      {/* footer */}
    </div>
  );
};

export default Footer;
