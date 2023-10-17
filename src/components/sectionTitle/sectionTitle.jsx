import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import { Statistics } from 'components/statistics/statistics';
import { Notification } from 'components/notification/notification';

export const Section = ({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  onChangeGood,
  onChangeNeutral,
  onChangeBad,
  totalFeedback,
  percentGood,
}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        onLeaveFeedBack={onLeaveFeedback}
        options={options}
        good={good}
        neutral={neutral}
        bad={bad}
        onChangeGood={onChangeGood}
        onChangeNeutral={onChangeNeutral}
        onChangeBad={onChangeBad}
      />
      {totalFeedback !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          percentGood={percentGood}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
