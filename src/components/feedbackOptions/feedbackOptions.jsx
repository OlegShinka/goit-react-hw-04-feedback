import { Btn } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <div>
      {options.map((item, index) => (
        <Btn
          type="button"
          key={index}
          bgColor={item}
          onClick={() => {
            //на подію виклик анонім фу яка поверне метод з аргументом item
            return onLeaveFeedBack(item);
          }}
        >
          {item}
        </Btn>
      ))}
    </div>
  );
};
