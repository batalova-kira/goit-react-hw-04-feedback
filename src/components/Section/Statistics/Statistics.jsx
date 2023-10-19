import { StatisticsList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p> Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StatisticsList>
  );
};

export default Statistics;
