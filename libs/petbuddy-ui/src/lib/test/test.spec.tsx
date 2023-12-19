import React from 'react';
import { render } from '@testing-library/react-native';

import Test from './test';

describe('Test', () => {
  it('should render successfully', () => {
    const { root } = render(< Test />);
    expect(root).toBeTruthy();
  });
});
