//const { default: $ } = require('webdriverio/build/commands/element/$');  - из-за этого была ошибка

class Header {
  constructor() {}

  get container() {
    return $('#header');
  }

  get navBar() {
    const navBlock = this.container.$('nav');
    return {
      contactLink: navBlock.$('#contact-link a'),
      // signInBtn: ,
      // phoneBlock:
    };
  }

  get banner() {
    return this.container.$('.banner');
  }

  get menu() {
    return this.container.$('#block_top_menu ul.menu-content');
  }

  get menuItems() {
    return this.menu.$$('li > a');
  }
}

module.exports = new Header();
