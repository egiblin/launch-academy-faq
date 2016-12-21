import React from 'react';
import AnswerList from './AnswerList';
import data from '../constants/data';

const App = props => {
  return (
    <div>
      <h1>We are here to help!</h1>
        <AnswerList
          data={props.data}/>
    </div>
  )
};

export default App;
