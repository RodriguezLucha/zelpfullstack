
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import register from 'ignore-styles';
register(['.sass', '.scss']);
let jsdom = require('jsdom-global');
jsdom();
import React from 'react';

import {render, cleanup, waitForElement} from '@testing-library/react';

import Footer from '../frontend/components/common/footer/footer';

afterEach(cleanup);

describe('Test footer component', () => {
  it('Has a github icon', async () => {
    const location = {pathname: '/test/'};
    const {getByTestId} = render(<Footer location={location}/>);
    await waitForElement(() => getByTestId('github-icon'));
  });

  it('Has a LinkedIn icon', async () => {
    const location = {pathname: '/test/'};
    const {getByTestId} = render(<Footer location={location}/>);
    await waitForElement(() => getByTestId('linkedin-icon'));
  });
});
