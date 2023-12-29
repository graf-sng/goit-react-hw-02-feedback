import { Component } from 'react';

class Button extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = ({ target: { name } }) => {
    this.setState({
      [name]: this.state[name] + 1,
      total: this.state.good,
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    parseInt((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage() || 0;
    return (
      <>
        <h3>Please leave feedback</h3>
        <button type="submit" name="good" onClick={this.handlerClick}>
          good
        </button>
        <button type="submit" name="neutral" onClick={this.handlerClick}>
          neutral
        </button>
        <button type="submit" name="bad" onClick={this.handlerClick}>
          bad
        </button>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad} </p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positive}% </p>
      </>
    );
  }
}

export default Button;
