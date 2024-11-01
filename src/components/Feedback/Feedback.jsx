const Feedback = ({ feedbackItem, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {feedbackItem.good}</li>
      <li>Neutral: {feedbackItem.neutral}</li>
      <li>Bad: {feedbackItem.bad}</li>
      {totalFeedback > 0 && <li>Total: {totalFeedback}</li>}
      {totalFeedback > 0 && (
        <li>
          Positive: {Math.round((feedbackItem.good / totalFeedback) * 100)}%
        </li>
      )}
    </ul>
  );
};

export default Feedback;
