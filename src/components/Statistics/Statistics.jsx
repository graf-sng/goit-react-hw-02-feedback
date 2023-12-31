import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <>
    <p className={css.green}>Good: {good}</p>
    <p className={css.blue}>Neutral: {neutral} </p>
    <p className={css.red}>Bad: {bad} </p>
    <p className={css.orange}>Total: {total}</p>
    <p className={css.feedback}>Positive feedback: {positive}% </p>
  </>
);
export default Statistics;
