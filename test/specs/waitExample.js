const HomePage = require('../pages/Home');

describe('Menu', () => {
  before(async () => {
    await HomePage.open();
  });
  it('hover over menu', async () => {
    const menuItem = await HomePage.Header.menuItems[0];
    const submenu = await HomePage.Header.container.$('ul.submenu-container');
    await menuItem.moveTo();

    // await submenu.waitForDisplayed({ timeout: 3000 });
    await submenu.waitUntil(async () => await submenu.isDisplayed(), { timeout: 3000 });

    const a = await submenu.$('a');
    await a.click();

    const header = await $('h1.page-heading.product-listing');
    await expect(header).toHaveTextContaining('TOPS');
  });
});
