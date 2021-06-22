import React from 'react';

import styled from '@emotion/styled';

import Button from './Button';

const SubmitContainer = styled.div({
  margin: '5vh 0',
});

const SubmintInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '4vh 0',
});

const Title = styled.div({
  fontSize: '2.7vh',
  width: '20%',
});

const Description = styled.div({
  fontSize: '1vh',
  width: '60%',
});

const SubmitInput = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '7vh 0',
});

export default function Submit({ onChange, onClick }) {
  return (
    <SubmitContainer>
      <SubmintInfo>
        <Title>업로드</Title>
        <Description>
          예측값이 담긴 테스트 데이터셋을 업로드 후, 제출하기 버튼을 눌러 제출해 주세요.
        </Description>
        <Button type="button" onClick={onClick}>
          제출하기
        </Button>
      </SubmintInfo>

      <SubmitInput>
        <label htmlFor="fileInput" style={{ display: 'none' }}>
          파일 선택:
        </label>

        <input
          id="fileInput"
          type="file"
          accept="text/csv"
          onChange={onChange}
          name="uploadFile"
        />
      </SubmitInput>

    </SubmitContainer>
  );
}
