const response = require('../fixtures/articles');

describe('Conduit', () => {
  before(async () => {
    browser.url('https://demo.realworld.io/#/');
  });

  it('calls api stub', async () => {
    const mock = await browser.mock('https://api.realworld.io/api/articles?limit=10&offset=0&tag=implementations');

    const tag = await $('.tag-list a:nth-of-type(2)');
    await tag.waitForClickable();
    await tag.click();

    await expect(mock).toBeRequestedTimes(1);
  });

  it('mock data example', async () => {
    const mock = await browser.mock('https://api.realworld.io/api/articles?limit=10&offset=0&tag=implementations');
    mock.respond(response);

    const tag = await $('.tag-list a:nth-of-type(2)');
    await tag.waitForClickable();
    await tag.click();

    await $('[article=article]').waitForExist();
    const articles = await browser.$$('[article=article]');

    let titles = articles.map((article) => article.$('h1').getText());
    titles = await Promise.all(titles);

    console.log(titles);

    //await $('.sdfsdf').waitForExist({ timeout: 5 * 1000 });
  });
});
