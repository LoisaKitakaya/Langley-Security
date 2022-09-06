import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

import questions from "../json/FAQs.json";

export default class CareersContainer extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        {questions.map((question) => {
          const list = (
            <>
              <div key={question.id}>
                <Accordion.Title
                  active={activeIndex === question.index}
                  index={question.index}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  {question.question}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === question.index}>
                  <p className='has-text-dark'>{question.answer}</p>
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