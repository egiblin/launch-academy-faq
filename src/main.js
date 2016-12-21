import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './constants/data';

// const QAItem = props => {
//   return (
//     <li>
//       {props.question}
//       {props.answer}
//       <button type="button" onClick={props.handleButtonClick}>+</button>
//     </li>
//   );
// };
//
// const QAList = props => {
//   let data = props.data.map(item => {
//     const { id, question, answer  } = item;
//     let onButtonClick = () => props.handleButtonClick(id);
//
//     return (
//       <QAItem
//         key={id}
//         question={question}
//         answer={answer}
//         handleButtonClick={onButtonClick}
//       />
//     );
//   });
//
//   return (
//     <ul>
//       {data}
//     </ul>
//   );
// };
let divElement = <div>
  <ul class="vertical menu" data-accordion-menu>
    <li>
      <a href="#">Item 1</a>
      <ul class="menu vertical nested">
        <li><a href="#">Item 1A</a></li>
        <li><a href="#">Item 1B</a></li>
      </ul>
    </li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>;
//
// <h1> data.question
// <h3> data.answer

ReactDOM.render(
  <App data={data} />,
  document.getElementById('app')
);
