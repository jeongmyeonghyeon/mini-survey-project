import { useRecoilState } from 'recoil';

import answersState from '../stores/answers/atom';
import useStep from './useStep';

function useCurrentAnswer() {
  const [answers, setAnswers] = useRecoilState(answersState);
  const step = useStep();

  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  return [answer, setAnswer];
}

export default useCurrentAnswer;
