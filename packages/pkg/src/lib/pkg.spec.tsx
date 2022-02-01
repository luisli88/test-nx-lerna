import { render } from '@testing-library/react';

import Pkg from './pkg';

describe('Pkg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pkg />);
    expect(baseElement).toBeTruthy();
  });
});
