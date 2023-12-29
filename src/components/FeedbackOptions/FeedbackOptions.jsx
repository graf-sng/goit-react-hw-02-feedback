const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button onClick={() => onLeaveFeedback(option)} key={option}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
