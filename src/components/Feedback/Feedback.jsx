const Feedback = ({ feedbackItem, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>Good: {feedbackItem.good}</li>
      <li>Neutral: {feedbackItem.neutral}</li>
      <li>Bad: {feedbackItem.bad}</li>
      {totalFeedback > 0 && <li>Total: {totalFeedback}</li>}
      {totalFeedback > 0 && <li>Positive: {positiveFeedback}%</li>}
    </ul>
  );
};

export default Feedback;
