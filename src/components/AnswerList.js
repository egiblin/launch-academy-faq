import React from 'react';
import Answer from './Answer';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedAnswerId: null };
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  handleAnswerClick(id) {
    let selectedId = id;
    if(id == this.state.selectedAnswerId) {
      selectedId = null;
    }
    this.setState({ selectedAnswerId: selectedId });
  }

  render() {
    let answerList = this.props.data.map((datum) => {
      let selected = false;

      if (datum.id === this.state.selectedAnswerId) {
        selected = true;
      }

      let onAnswerClick = () => this.handleAnswerClick(datum.id);

      return (
        <Answer
          selected={selected}
          key={datum.id}
          question={datum.question}
          answer={datum.answer}
          handleClick={onAnswerClick}
          />
      );
      });

      return (<div>
        <ul>{answerList}</ul>
        </div>
      );
  }
}


export default AnswerList;
