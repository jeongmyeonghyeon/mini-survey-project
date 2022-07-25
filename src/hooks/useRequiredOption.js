import useCurrentQuestion from './useCurrentQuestion';
import useStep from './useStep';

function useRequiredOption() {
  const question = useCurrentQuestion();
  return question?.required || false;
}

export default useRequiredOption;
