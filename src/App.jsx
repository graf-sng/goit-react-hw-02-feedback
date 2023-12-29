import { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
// import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // handlerClick = ({ target: { name } }) => {
  //   this.setState({
  //     [name]: this.state[name] + 1,
  //   });
  // };
  handlerClick = state => {
    this.setState(prev => ({
      [state]: prev[state] + 1,
    }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    parseInt((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h3>Please leave feedback</h3>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handlerClick}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <div>test</div>
        )}
      </>
    );
  }
}

export default App;
