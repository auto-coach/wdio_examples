const HomePage = require('../pages/Home');
const { getElementWidth } = require('../utils/elements');

const { socials } = require('../fixtures/footerLinks');
const Slider = require('../pages/components/Slider');

describe('Home Page', () => {
  before(async () => {
    require('expect-webdriverio').setOptions({ wait: 200 });
    await HomePage.open();
    this.Footer = HomePage.Footer;
    this.keys = Object.keys(this.Footer.socialBlock.links);
  });

  it('newsletter email placeholder', async () => {
    const { Footer } = HomePage;
    const email = await Footer.newsletterBlock.input;
    await expect(email).toHaveValue('Enter your e-mail', { message: 'ololo', wait: 500, containing: true });
  });

  it('newsletter email placeholder vanishes on click', async () => {
    const emailInput = await HomePage.Footer.newsletterBlock.input;
    await emailInput.click();
    await expect(emailInput).toHaveValue('');
  });

  it('search placeholder is correct', async () => {
    await expect(HomePage.searchInput).toHaveAttr('placeholder', 'Search');
  });

  Object.keys(socials).forEach((linkName) => {
    it(`${linkName} social link have target="_blank"`, async () => {
      const link = await HomePage.Footer.socialBlock.$(`li.${linkName} a`);

      await expect(link).toBeClickable();
      await expect(link).toHaveAttr('target', '_blank');
      await expect(link).toHaveAttrContaining('href', socials[linkName].href);
    });
  });
});

describe('header', () => {
  it('header test', async () => {
    await browser.url('/');
    const contactLink = await HomePage.Header.navBar.contactLink; //await $('#header #contact-link a');
    await expect(contactLink).toHaveText('Contact us');
  });
});
