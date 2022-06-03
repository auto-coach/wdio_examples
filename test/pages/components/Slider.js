class Slider {
  constructor() {}

  async getPrice(which) {
    const priceRangeString = await this.priceRange.getText();
    const prices = priceRangeString.split(' - ');
    return which === 'min' ? prices[0].slice(1) : prices[1].slice(1);
  }

  get container() {
    return $('.layered_price');
  }

  get range() {
    return this.container.$('.layered_slider');
  }

  get leftHandle() {
    return this.range.$('a:first-of-type');
  }

  get rightHandle() {
    return this.range.$('a:last-of-type');
  }

  get priceRange() {
    return this.container.$('#layered_price_range');
  }

  get lowerPrice() {
    return this.getPrice('min');
  }

  get higherPrice() {
    return this.getPrice('max');
  }
}

module.exports = new Slider();
