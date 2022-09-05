import { Link } from "react-router-dom";
import { Container, Breadcrumb, Icon, Divider } from "semantic-ui-react";

import PageTitle from "../PageTitle";
import data from "../json/privacypolicy.json";

const PrivacyPolicy = () => {
  PageTitle("Privacy policy");

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
            <Breadcrumb.Section active>Privacy policy</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* privacy police */}
      <Container>
        <div className="mb-3 box has-background-light card-shadow">
          <h3 className="is-size-3 has-text-centered">Privacy policy</h3>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              Last updated: {data.introduction.lastUpdated}
            </p>
            <br />
            <p>{data.introduction.openingStatementOne}</p>
            <br />
            <p>{data.introduction.openingStatementTwo}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.navigation.title}</p>
            <br />
            <ul>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idOne}`}>
                  The Information We Collect About You
                </a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idTwo}`}>
                  Our Use of Your Information
                </a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idThree}`}>
                  Our Disclosure of Your Information
                </a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idFour}`}>
                  Our Use of Cookies and Other Tracking Technologies
                </a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idFive}`}>Links</a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idSix}`}>
                  Opting Out of Email Marketing
                </a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idSeven}`}>Security</a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idEight}`}>Contacting Us</a>
              </li>
              <li>
                <Icon name="angle right" />{" "}
                <a href={`#${data.navigation.idNine}`}>Contact Us</a>
              </li>
            </ul>
          </div>
          <Divider />
          <div className="mb-3" id={data.navigation.idOne}>
            <p className="is-size-5 has-text-dark">
              {data.informationWeCollectAboutYou.title}
            </p>
            <br />
            <p>{data.informationWeCollectAboutYou.paragraphOne}</p>
            <br />
            <p>{data.informationWeCollectAboutYou.paragraphTwo}</p>
            <br />
            <ul>
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointOne
                }
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointTwo
                }
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointThree
                }
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointFour
                }
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointFive
                }
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointSix
                }
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointSeven
                }
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {
                  data.informationWeCollectAboutYou
                    .informationWeCollectDirectlyFromYou.pointEight
                }
              </li>
            </ul>
          </div>
        </div>
      </Container>
      {/* privacy police */}
    </div>
  );
};

export default PrivacyPolicy;
