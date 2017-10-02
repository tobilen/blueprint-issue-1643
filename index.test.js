import React from 'react';
import renderer from 'react-test-renderer';
import { Popover } from '@blueprintjs/core';

describe('InputDate', () => {
  it('renders', () => {
    const component = renderer.create(
      <Popover><div>Test</div></Popover>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
