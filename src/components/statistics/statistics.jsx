import { List } from './statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  percentGood,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <List>Good:{good}</List>
        <List>Neutral:{neutral}</List>
        <List>Bad:{bad}</List>
        <List>Total:{totalFeedback}</List>
        <List>Positive feedback:{percentGood}%</List>
      </ul>
    </div>
  );
};
