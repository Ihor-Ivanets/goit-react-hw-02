const Options = ({
  feedbackItem,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <section>
      {Object.keys(feedbackItem).map(item => {
        return (
          <button
            key={item}
            onClick={() => updateFeedback(`${item}`)}
            type="button"
          >
            {item}
          </button>
        );
      })}
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </section>
  );
};

export default Options;
