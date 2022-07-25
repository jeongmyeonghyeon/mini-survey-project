// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useRecoilState, useRecoilValue } from 'recoil';
import { Suspense } from 'react';
import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
// import questionsState from '../../stores/questions/atom';

function SurveyPage() {
  // const params = useParams();

  // const step = parseInt(params.step);

  // const questions = useRecoilValue(questionsState);
  // const [answers, setAnswers] = useState([]);

  // console.log('answers', answers);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionBox
        // question={questions[step]}
        // questionsLength={questions.length}
        // step={step}
        // answer={answers[step]}
        // setAnswer={(newAnswer) => {
        //   setAnswers((answers) => {
        //     const newAnswers = [...answers];
        //     newAnswers[step] = newAnswer;
        //     return newAnswers;
        //   });
        // }}
        />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
