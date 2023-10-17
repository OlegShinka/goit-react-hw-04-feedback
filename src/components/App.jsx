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

        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);

        break;
      case 'bad':
        setBad(prevState => prevState + 1);

        break;
      default:
    }
  };

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
      />
    </div>
  );
};

export default App;
