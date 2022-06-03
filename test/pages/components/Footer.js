const CONTAINER = '#footer';

class Footer {
  constructor() {}

  get container() {
    return browser.$(CONTAINER);
  }

  get socialBlock() {
    return this.container.$('#social_block');
  }

  get newsletterBlock() {
    const $block = this.container.$('#newsletter_block_left');
    return {
      header: $block.$('h4'),
      input: $block.$('[name="email"]'),
    };
  }
}

module.exports = new Footer();
