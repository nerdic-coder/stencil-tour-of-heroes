import { render } from '@stencil/core/testing';
import { Heroes } from './heroes';

describe('app-heroes', () => {
  it('should build', () => {
    expect(new Heroes()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [Heroes],
        html: '<app-heroes></app-heroes>'
      });
    });
  });
});
