import { environmentTypes } from '../../../properties/enviromentProperties';
import { customCentered } from '../../index';

const SELECTORS = {
  container: '#guideContainerForm .guideContainerWrapperNode',
  element: '#guideContainerForm .formWithLoginConfig',
}

describe('= Accordion Standard =', () => {
  beforeEach(() => {
    const url = "/about/careers.html";
    browser.urlOnEnv(environmentTypes.TEST_PUBLISH_HOST, url);

    browser.execute(() => {
      document.querySelector("#auth > div > a").click();
    });
    browser.pause(4000);
    browser.switchToFrame($('.form-iframe'));
  });

  describe('Checking the centering of an item in a container', () => {
    it('Checking customCentered method', () => {
      let customNearTop = customCentered(
        SELECTORS.container,
        SELECTORS.element,
        'horizontal',
        '.form-iframe');

      browser.highlightCheckedElement(SELECTORS.container);
      browser.highlightCheckedElement(SELECTORS.element, 'bottom');
      browser.takeScreenshot();
      expect(customNearTop).to.be.true;
    });
  });
});