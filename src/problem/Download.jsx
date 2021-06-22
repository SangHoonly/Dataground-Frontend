import React from 'react';

import styled from '@emotion/styled';

import Button from './Button';

const DownloadContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '5vh 0',
});

const DownloadTitle = styled.div({
  fontSize: '2.7vh',
  width: '20%',
});

const DownloadDescription = styled.div({
  fontSize: '1vh',
  width: '60%',
});

export default function Download({ onClick }) {
  return (
    <DownloadContainer>
      <DownloadTitle>
        다운로드
      </DownloadTitle>

      <DownloadDescription>
        주어진 데이터셋을 다운로드하세요.
      </DownloadDescription>

      <Button type="button" onClick={onClick}>
        DOWNLOAD
      </Button>

    </DownloadContainer>
  );
}
