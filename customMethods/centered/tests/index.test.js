import { environmentTypes } from '../../../properties/enviromentProperties';
import { customCentered } from '../../index';

const SELECTORS = {
  container: '.linksHolder',
  element: '.linksHolder a.button',
}

describe('= Accordion Standard =', () => {
  beforeEach(() => {
    const url = "/about/careers.html";
    browser.urlOnEnv(environmentTypes.TEST_PUBLISH_HOST, url);
  });

  describe('Checking the centering of an item in a container', () => {
    it('Checking customCentered method', () => {
      let customNearTop = customCentered(
        SELECTORS.container,
        SELECTORS.element,
        'all');

      browser.highlightCheckedElement(SELECTORS.container);
      browser.highlightCheckedElement(SELECTORS.element);
      browser.takeScreenshot();
      expect(customNearTop).to.be.true;
    });
  });
});