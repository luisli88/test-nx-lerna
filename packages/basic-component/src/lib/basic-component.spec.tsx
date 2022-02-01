import { render } from '@testing-library/react';

import BasicComponent from './basic-component';

describe('BasicComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicComponent title='Name' />);
    expect(baseElement).toBeTruthy();
  });
});
