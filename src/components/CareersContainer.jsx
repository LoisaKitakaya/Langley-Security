import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

import careers from "../json/careers.json";

export default class CareersContainer extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        {careers.map((career) => {
          const list = (
            <>
              <div key={career.id}>
                <Accordion.Title
                  active={activeIndex === career.index}
                  index={career.index}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  {career.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === career.index}>
                  <p className="has-text-dark">{career.responsibilities}</p>
                  <ul className="has-text-dark">
                    <li>Education level: {career.requirements.education}</li>
                    <br />
                    <li>
                      Work experience: {career.requirements["work experience"]}
                    </li>
                    <br />
                    <li>
                      Candidate description:{" "}
                      {career.requirements.candidateDescription}
                    </li>
                  </ul>
                  <br />
                  <p className="has-text-dark">
                    To make applications: Call the Hiring Manager at{" "}
                    <a href="tel:+254720469665" className="has-text-link">
                      +254 720 469 665
                    </a>
                    , or email the hiring manager at{" "}
                    <a
                      href="mailto:kitakayaloisa@gmail.com"
                      className="has-text-link"
                    >
                      info@langleysecurity.com
                    </a>
                  </p>
                </Accordion.Content>
              </div>
            </>
          );

          return list;
        })}
      </Accordion>
    );
  }
}
