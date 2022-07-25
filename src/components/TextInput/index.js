import { useEffect } from 'react';
import styled from 'styled-components';

import useRequiredOption from '../../hooks/useRequiredOption';

function TextInput({ answer = '', setAnswer, options }) {
  const isRequired = useRequiredOption();

  useEffect(() => {
    if (!isRequired) setAnswer(answer);
  }, []);

  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
      {...(options?.max && { maxLength: options?.max })}
      // maxLength={options?.max}
    />
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
`;

export default TextInput;
