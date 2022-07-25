import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Box>
          <Routes>
            <Route path="/done/:surveyId" element={<CompletionPage />} />
            <Route path="/survey/:surveyId" element={<SurveyPage />}>
              <Route path=":step" element={<SurveyPage />} />
            </Route>
          </Routes>
        </Box>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f6;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 700px;
  min-height: 500px;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

/* 

"/survey" 추가로 필요한 것: 설문ID

http://www.mini-survey.com/survey?id=abc123
http://www.mini-survey.com/survey/abc123 (보면서 헷갈릴 수 있음... 이게 path야... data 같은 역할인거야?) → :id 이렇게 줘버린닷~

state로 처리하면, 두번째 페이지에서 '뒤로가기'를 눌렀을 때,
안에 내용이 바뀌는 것이 아니라, 완전히 survey 페이지를 벗어날 것이기 때문에
service 스텝을 state를 활용해서 화면만 갈아끼워주는게 아니라
router(history)로써 관리하는 것이 사용성면에서 더 유리함..!

*/

export default App;
