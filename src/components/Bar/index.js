import styled from 'styled-components';

// status = 'pending' | 'in-progress' | 'done'
const Bar = styled.div`
  width: 120px;
  height: 8px;

  background: ${({ status }) => {
    if (status === 'pending') {
      return '#E3E2E7';
    } else if (status === 'in-progress') {
      return '#BAA9FF';
    } else if (status === 'done') {
      return '#6542F1';
    }
  }};
  border-radius: 16px;
`;

export default Bar;
