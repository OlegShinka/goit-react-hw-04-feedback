import React, { useState } from 'react';
import { Section } from './sectionTitle/sectionTitle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const upDateFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        console.log('good');
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        console.log('neutral');
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        console.log('bad');
        break;
      default:
        console.log('ups');
    }
    // this.setState(prevState => ({
    //   [type]: prevState[type] + 1,
    // }));
  };
  // const onChangeGood = () => {
  //   //upDateFeedback(setGood(prevState => prevState + 1));
  // };
  // const onChangeNeutral = () => {
  //   // upDateFeedback(setNeutral(prevState => prevState + 1));
  //   //upDateFeedback('neutral');
  // };
  // const onChangeBad = () => {
  //   // upDateFeedback(setBad(prevState => prevState + 1));
  //   //upDateFeedback('bad');
  // };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section
        onLeaveFeedback={upDateFeedback}
        options={['good', 'neutral', 'bad']}
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={countTotalFeedback()}
        percentGood={countPositiveFeedbackPercentage()}
        // onChangeGood={onChangeGood}
        // onChangeNeutral={onChangeNeutral}
        // onChangeBad={onChangeBad}
      />
    </div>
  );
};

export default App;
