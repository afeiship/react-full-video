import * as React from 'react';
import { render } from '@testing-library/react';
import ReactFullVideo from '../src/main';

describe('01/basic props', () => {
  test('<ReactFullVideo /> set content to body should be worked', () => {
    render(<ReactFullVideo />);
    console.log(document.body.innerHTML);
    expect(document.body.innerHTML.includes('Enjoy coding')).toBeTruthy();
  });
});
