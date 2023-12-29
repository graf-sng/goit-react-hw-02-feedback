const Statistics = ({ good, neutral, bad, total, positive }) => (
  <>
    <h3>Statistics</h3>

    <p>Good: {good}</p>
    <p>Neutral: {neutral} </p>
    <p>Bad: {bad} </p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positive}% </p>
  </>
);
export default Statistics;
