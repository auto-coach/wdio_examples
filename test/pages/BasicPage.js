class Page {
  constructor() {}
  async open(path) {
    await browser.url(path || this.path);
  }
}

module.exports = Page;
