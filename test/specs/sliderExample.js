const Slider = require('../pages/components/Slider');

describe('slider', () => {
  before(async () => {
    require('expect-webdriverio').setOptions({ wait: 500 });
    await browser.url('http://automationpractice.com/index.php?id_category=3&controller=category#/');
  });

  it('slides', async () => {
    let initialLowerPrice = await Slider.lowerPrice;

    await Slider.container.scrollIntoView();
    await Slider.leftHandle.dragAndDrop({ x: 100, y: 0 }, { duration: 3000 });

    const currentLowerPrice = await Slider.lowerPrice;

    //asertion
  });
});
