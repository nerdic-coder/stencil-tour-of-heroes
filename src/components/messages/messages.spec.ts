import { render } from '@stencil/core/testing';
import { Messages } from './messages';

describe('app-messages', () => {
  it('should build', () => {
    expect(new Messages()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [Messages],
        html: '<app-messages></app-messages>'
      });
    });
  });
});
