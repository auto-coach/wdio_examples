//const { default: $ } = require('webdriverio/build/commands/browser/$');  - из-за этого была ошибка

class Footer {
  constructor() {}

  get container() {
    return $('#footer');
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
