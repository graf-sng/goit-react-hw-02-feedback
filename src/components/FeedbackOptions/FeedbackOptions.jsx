import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        className={css.btn}
        onClick={() => onLeaveFeedback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
