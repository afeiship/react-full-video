# react-full-video
> Full page background video for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-full-video
```

## videos
- https://lofter.lf127.net/1611802866186/JWmeidangyeshenrenjingtayufangjiankuishixingchen.mp4
- https://lofter.lf127.net/1611821341381/jwhaideyanjing~1.mp4

## usage
1. import css
  ```scss
  @import "~@jswork/react-full-video/dist/style.css";

  // or use sass
  @import "~@jswork/react-full-video/dist/style.scss";

  // customize your styles:
  $react-full-video-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactFullVideo from '@jswork/react-full-video';
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
        <ReactFullVideo />
        <div className="card">A nice login ui.</div>
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-full-video/

## license
Code released under [the MIT license](https://github.com/afeiship/react-full-video/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-full-video
[version-url]: https://npmjs.org/package/@jswork/react-full-video

[license-image]: https://img.shields.io/npm/l/@jswork/react-full-video
[license-url]: https://github.com/afeiship/react-full-video/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-full-video
[size-url]: https://github.com/afeiship/react-full-video/blob/master/dist/react-full-video.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-full-video
[download-url]: https://www.npmjs.com/package/@jswork/react-full-video
