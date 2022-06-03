const axios = require('axios');
const credentials = require('../contants/credentials');

describe('Login Example', () => {
  beforeEach(async () => {
    browser.url('https://demo.realworld.io/#/login');
    browser.execute(async () => {
      localStorage.removeItem('jwtToken');
    });
  });

  it('Login via UI', async () => {
    const emailInput = await $('input[type=email]');
    const pwdInput = await $('input[type=password]');
    const btn = await $('button[type=submit]');

    await emailInput.setValue(credentials.EMAIL);
    await pwdInput.setValue(credentials.PASSWORD);

    await btn.click();

    const userNameLink = await $(`*=${credentials.USER_NAME}`);

    await expect(userNameLink).toBeDisplayedInViewport();
    //await $('.sdfsdf').waitForExist({ timeout: 5 * 1000 });
  });
  it('Login via ajax query', async () => {
    const payload = { user: { email: credentials.EMAIL, password: 'qwas' } };
    const token = await browser.call(async () => {
      const result = await axios.post('https://api.realworld.io/api/users/login', payload).catch((e) => console.log(e));
      return result.data.user.token;
    });

    await browser.execute(async (token) => {
      localStorage.setItem('jwtToken', token);
    }, token);

    browser.url('https://demo.realworld.io/#/login');

    const userNameLink = await $(`*=${credentials.USER_NAME}`);
    await expect(userNameLink).toBeDisplayedInViewport();
    //await $('.sdfsdf').waitForExist({ timeout: 3 * 1000 });
  });

  it('Login as browser command', async () => {
    await browser.loginWithCreds(credentials.EMAIL, credentials.PASSWORD);

    browser.url('https://demo.realworld.io/#/login');
    const userNameLink = await $(`*=${credentials.USER_NAME}`);
    await expect(userNameLink).toBeDisplayedInViewport();
  });
});
