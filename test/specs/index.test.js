import { environmentTypes } from '../../properties/enviromentProperties';
import { customInside } from '../../customMethods/index';

const SELECTORS = {
  container: '.glassdoorComponent.rating',
  element: '.glassdoorComponent.rating > a',
}

describe('= Accordion Standard =', () => {
  beforeEach(() => {
    const url = "/about/careers.html";
    browser.urlOnEnv(environmentTypes.TEST_PUBLISH_HOST, url);
    browser.pause(2000);
  });

  describe('Checking the centering of an item in a container', () => {
    it('Checking customCentered method', () => {
      const { element } = SELECTORS;
      browser.execute((element) => {
        $(element).css('display', 'block');
      }, element);
      let customInsideTest = customInside(
        SELECTORS.container,
        SELECTORS.element,
        {
          top: 15,
          right: 15,
          bottom: 15,
          left: 15,
        });
      browser.highlightCheckedElement(SELECTORS.container);
      browser.highlightCheckedElement(SELECTORS.element, 'bottom');
      browser.takeScreenshot();

      browser.pause(5000);
      expect(customInsideTest).to.be.true;
    });
  });
});