import { render } from '@stencil/core/testing';
import { HeroDetails } from './hero-details';

describe('app-hero-details', () => {
  it('should build', () => {
    expect(new HeroDetails()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [HeroDetails],
        html: '<app-hero-details></app-hero-details>'
      });
    });
  });
});
