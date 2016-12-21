import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  render() {
    let questionAnswer = ""
    if (this.props.selected) {
      questionAnswer += `${this.props.answer}`;
    }

    let button;
    if (this.props.selected) {
      button = <button className="fa fa-minus-square fa-5x" id="minus" onClick={this.props.handleClick}></button>;
    } else {
      button = <button className="fa fa-plus-square fa-5x" id="plus" onClick={this.props.handleClick}></button>

    }

  return (
    <div className="faq">
      <div>
        {button}
      </div>

      <div className="question">
        <p key={this.props.id}>{this.props.question}</p>
      </div>

      <div className="answer">
        <p key={this.props.id}>{questionAnswer}</p>
      </div>

    </div>
    )
  }
}

export default Answer;
