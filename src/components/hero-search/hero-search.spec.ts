import { render } from '@stencil/core/testing';
import { HeroeSearch } from './hero-search';

describe('app-hero-search', () => {
  it('should build', () => {
    expect(new HeroeSearch()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [HeroeSearch],
        html: '<app-hero-search></app-hero-search>'
      });
    });
  });
});
