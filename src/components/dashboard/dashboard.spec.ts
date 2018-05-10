import { render } from '@stencil/core/testing';
import { Dashboard } from './dashboard';

describe('app-dashboard', () => {
  it('should build', () => {
    expect(new Dashboard()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [Dashboard],
        html: '<app-dashboard></app-dashboard>'
      });
    });
  });
});
