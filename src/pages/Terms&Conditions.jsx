import { Link } from "react-router-dom";
import { Container, Breadcrumb, Icon, Divider } from "semantic-ui-react";

import PageTitle from "../PageTitle";
import data from "../json/termsofuse.json";

const TermsAndConditions = () => {
  PageTitle("Terms & conditions");

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
            <Breadcrumb.Section active>Terms of use</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* terms */}
      <Container>
        <div className="mb-6 box has-background-light card-shadow">
          <h3 className="is-size-3 has-text-centered">Terms of use</h3>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              Last updated: {data.introduction.lastUpdated}
            </p>
            <br />
            <p>{data.introduction.openingStatement}</p>
            <br />
            <p>
              <strong>NOTE: {data.introduction.note}</strong>
            </p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.natureOfAgreement.title}
            </p>
            <br />
            <p>{data.natureOfAgreement.paragraphOne}</p>
            <br />
            <p>{data.natureOfAgreement.paragraphTwo}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.grantOfLicense.title}
            </p>
            <br />
            <p>{data.grantOfLicense.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.intellectualPropertyRights.title}
            </p>
            <br />
            <p>{data.intellectualPropertyRights.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.passwordPolicy.title}
            </p>
            <br />
            <p>{data.passwordPolicy.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.unauthorizedUse.title}
            </p>
            <br />
            <p>{data.unauthorizedUse.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.privacy.title}</p>
            <br />
            <p>{data.privacy.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.ideaSubmissionPolicy.title}
            </p>
            <br />
            <p>{data.ideaSubmissionPolicy.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.restrictionsAndCovenants.title}
            </p>
            <br />
            <p>{data.restrictionsAndCovenants.paragraphOne}</p>
            <br />
            <p>{data.restrictionsAndCovenants.paragraphTwo}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.assumptionOfRisk.title}
            </p>
            <br />
            <p>{data.assumptionOfRisk.paragraphOne}</p>
            <br />
            <p>{data.assumptionOfRisk.paragraphTwo}</p>
            <br />
            <p>{data.assumptionOfRisk.paragraphThree}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.linksToThirdPartySites.title}
            </p>
            <br />
            <p>{data.linksToThirdPartySites.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.disclaimer.title}</p>
            <br />
            <p>
              <strong>{data.disclaimer.paragraph}</strong>
            </p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.limitationOfLiability.title}
            </p>
            <br />
            <p>
              <strong>{data.limitationOfLiability.paragraph}</strong>
            </p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.indemnification.title}
            </p>
            <br />
            <p>{data.indemnification.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.notices.title}</p>
            <br />
            <p>{data.notices.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">{data.termination.title}</p>
            <br />
            <p>{data.termination.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.otherAgreements.title}
            </p>
            <br />
            <p>{data.otherAgreements.paragraph}</p>
          </div>
          <Divider />
          <div className="mb-3">
            <p className="is-size-5 has-text-dark">
              {data.miscellaneous.title}
            </p>
            <br />
            <p>{data.miscellaneous.paragraph}</p>
          </div>
          <Divider />
        </div>
      </Container>
      {/* terms */}
    </div>
  );
};

export default TermsAndConditions;
