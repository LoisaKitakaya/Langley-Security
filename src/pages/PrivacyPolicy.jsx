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
                <a href={`#${data.navigation.idEight}`}>Contact Us</a>
              </li>
            </ul>
          </div>
          <Divider id={data.navigation.idOne} />
          <div className="mb-3">
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
            <Divider />
            <div className="mb-3 ml-6 mr-6 reframe">
              <p className="is-size-5 has-text-dark">
                {data.informationWeCollectAboutYouFromOtherSources.title}
              </p>
              <br />
              <p>
                {data.informationWeCollectAboutYouFromOtherSources.paragraph}
              </p>
            </div>
            <Divider />
            <div className="mb-3 ml-6 mr-6 reframe">
              <p className="is-size-5 has-text-dark">
                {data.informationWeCollectAutomatically.title}
              </p>
              <br />
              <p>{data.informationWeCollectAutomatically.paragraph}</p>
            </div>
            <Divider />
            <div className="mb-3 ml-6 mr-6 reframe">
              <p className="is-size-5 has-text-dark">
                {data.informationWeCollectInOurCapacityAsAServiceProvider.title}
              </p>
              <br />
              <p>
                {
                  data.informationWeCollectInOurCapacityAsAServiceProvider
                    .paragraph
                }
              </p>
            </div>
          </div>
          <Divider id={data.navigation.idTwo} />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.ourUseOfYourInformation.title}
            </p>
            <br />
            <p>{data.ourUseOfYourInformation.setup}</p>
            <br />
            <ul>
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointOne}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointTwo}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointThree}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointFour}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointFive}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointSix}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointSeven}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointEight}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointNine}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointTen}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourUseOfYourInformation.delivery.pointEleven}
              </li>
              <br />
            </ul>
          </div>
          <Divider id={data.navigation.idThree} />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.ourDisclosureOfYourInformation.title}
            </p>
            <br />
            <p>{data.ourDisclosureOfYourInformation.setup}</p>
            <br />
            <ul>
              <li>
                <Icon name="angle right" />{" "}
                {data.ourDisclosureOfYourInformation.delivery.pointOne}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourDisclosureOfYourInformation.delivery.pointTwo}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourDisclosureOfYourInformation.delivery.pointThree}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourDisclosureOfYourInformation.delivery.pointFour}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourDisclosureOfYourInformation.delivery.pointFive}
              </li>
              <br />
              <li>
                <Icon name="angle right" />{" "}
                {data.ourDisclosureOfYourInformation.delivery.pointSix}
              </li>
              <br />
            </ul>
          </div>
          <Divider id={data.navigation.idFour} />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.cookiesAndTrackingTechnologies.title}
            </p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphOne}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphTwo}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphThree}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphFour}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphFive}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphSix}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphSeven}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphEight}</p>
            <br />
            <p>{data.cookiesAndTrackingTechnologies.paragraphNine}</p>
            <br />
          </div>
          <Divider id={data.navigation.idFive} />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.links.title}</p>
            <br />
            <p>{data.links.paragraph}</p>
          </div>
          <Divider id={data.navigation.idSix} />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.optingOutOfEmailMarketing.title}
            </p>
            <br />
            <p>{data.optingOutOfEmailMarketing.paragraph}</p>
          </div>
          <Divider id={data.navigation.idSeven} />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.security.title}</p>
            <br />
            <p>{data.security.paragraph}</p>
          </div>
          <Divider id={data.navigation.idEight} />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.contactUs.title}</p>
            <br />
            <p>{data.contactUs.paragraph}</p>
          </div>
        </div>
      </Container>
      {/* privacy police */}
    </div>
  );
};

export default PrivacyPolicy;
