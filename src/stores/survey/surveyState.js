// import axios from 'axios';
import { selector } from 'recoil';

// import mainApi from '../../services/apis/mainApi';
import getSurvey from '../../services/getSurvey';

// axios.defaults.baseURL = 'http://localhost:3001';

const surveyState = selector({
  key: 'surveyState',
  get: async () => {
    const res = await getSurvey(window.location.pathname.split('/')[2]);

    return res.data;
  },
});

export default surveyState;
