import { environmentTypes } from '../../../properties/enviromentProperties';
import { customCentered } from '../../index';

const SELECTORS = {
  container: '.logo-wrapper',
  element: '.logo-wrapper a.logo',
}

describe('= Accordion Standard =', () => {
  beforeEach(() => {
    const url = "/about/careers.html";
    browser.urlOnEnv(environmentTypes.TEST_PUBLISH_HOST, url);
    browser.pause(1000);

    browser.execute(() => {
      return $('.searchform .close-btn').click();
    });
    browser.pause(2000);
  });

  describe('Checking the vertical centering of an logo item in a container', () => {
    it('Checking customCentered method', () => {
      let customNearTop = customCentered(
        SELECTORS.container,
        SELECTORS.element,
        'vertical');

      browser.highlightCheckedElement(SELECTORS.container);
      browser.highlightCheckedElement(SELECTORS.element);
      browser.takeScreenshot();
      expect(customNearTop).to.be.true;
    });
  });
});