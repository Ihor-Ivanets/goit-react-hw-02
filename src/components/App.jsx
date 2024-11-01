import { useEffect, useState } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [feedbackItem, setFeedbackItem] = useState(() => {
    const savedFeedBack = window.localStorage.getItem('saved-feedback');
    if (savedFeedBack !== null) {
      return JSON.parse(savedFeedBack);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedbackItem));
  }, [feedbackItem]);

  const { good, neutral, bad } = feedbackItem;
  const totalFeedback = good + neutral + bad;

  const updateFeedback = feedbackType => {
    setFeedbackItem(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackItem({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description
        title="Sip Happens Café"
        descr="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        feedbackItem={feedbackItem}
        resetFeedback={resetFeedback}
      />

      {totalFeedback ? (
        <Feedback totalFeedback={totalFeedback} feedbackItem={feedbackItem} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
