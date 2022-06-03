const { getElementWidth } = require('../utils/elements');
const Slider = require('../pages/components/Slider');

describe('Slider', () => {
  before(async () => {
    require('expect-webdriverio').setOptions({ wait: 500 });
    await browser.url('http://automationpractice.com/index.php?id_category=3&controller=category#/');
  });

  it('sliders', async () => {
    let width = await getElementWidth(Slider.range);

    let initialLowerPrice = await Slider.lowerPrice;

    await Slider.leftHandle.scrollIntoView();
    await Slider.leftHandle.dragAndDrop({ x: parseInt(width / 2), y: 0 }, { duration: 3000 });

    const currentLowerPrice = await Slider.lowerPrice;

    /// some expectation goes here
  });
});
