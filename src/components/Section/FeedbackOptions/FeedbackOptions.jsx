import { BtnFeedback, List } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => (
        <BtnFeedback
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
          key={option}
        >
          {option}
        </BtnFeedback>
      ))}
    </List>
  );
}

export default FeedbackOptions;
