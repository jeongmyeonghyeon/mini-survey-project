import { useRecoilState, useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  // const surveyId = useSurveyId();
  // const [surveyData, setSurvey] = useRecoilState(surveyState);
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     console.log(res);
  //     setSurvey(res.data);
  //   });
  // }, [surveyId, setSurvey]);

  return questions[step];
}

export default useCurrentQuestion;
