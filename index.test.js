import React from 'react';
import renderer from 'react-test-renderer';
import { DateInput } from '@blueprintjs/datetime';

describe('InputDate', () => {
  it('renders', () => {
    const component = renderer.create(
      <DateInput />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
