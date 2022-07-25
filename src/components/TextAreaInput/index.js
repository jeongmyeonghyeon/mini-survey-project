import { useEffect } from 'react';
import styled from 'styled-components';

import useRequiredOption from '../../hooks/useRequiredOption';

function TextAreaInput({ answer = '', setAnswer, options }) {
  const isRequired = useRequiredOption();

  useEffect(() => {
    if (!isRequired) setAnswer(answer);
  }, []);

  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder="100자 이내로 입력해주세요."
      {...(options?.max && { maxLength: options?.max })}
    />
  );
}

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;

  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  height: 196px;
  resize: none;
`;

export default TextAreaInput;
