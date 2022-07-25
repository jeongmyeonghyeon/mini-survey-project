import { selector } from 'recoil';

import testState from './atom';

const testWithComma = selector({
  key: 'testWithComma',
  get: ({ get }) => {
    const abcdeArr = get(testState);

    return abcdeArr.join(',');
  },
});

export default testWithComma;
