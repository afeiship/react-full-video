import React from 'react';
import ReactFullVideo from '../../src/main';
import '../../src/components/style.scss';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
  .card {
    position: absolute;
    width: 400px;
    height: 220px;
    background: #fff;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default (props: any) => {
  return (
    <Container>
      <ReactFullVideo src="https://lofter.lf127.net/1611802866186/JWmeidangyeshenrenjingtayufangjiankuishixingchen.mp4" />
      <div className="card">A nice login ui.</div>
    </Container>
  );
};
