import { expect } from 'chai';
import { colors, fonts } from '../../helpers/commonData';
import { environmentTypes } from '../../properties/enviromentProperties';

const TimelineReporter = require('wdio-timeline-reporter').default;

const { dark_grey_color, ultra_light_gray_color, bright_blue_color } = colors;
const { sap_light_with_fallbacks } = fonts;

const SELECTORS = {
  accordionContainer: '.accordion-container',
  heading: '.accordion-container > p',
  accordionItemActive: '.accordion-container .item.active',
  iconCollapse: '.accordion-container .item.active .icon-zoomOut',
  accordionItemActiveMultilayoutStandard: '.accordion-container .item.active .multiLayout-standard .row',
  textStandard: '.accordion-container .item.active .textStandard',
  textStandardBlock: '.accordion-container .item.active .textStandard .standardText',
  textStandardBlockHeadline: '.accordion-container .item.active .textStandard .standardText .he, .hc, .hd',
  textStandardBlockParagraph: '.accordion-container .item.active .textStandard .standardText .body-text',
  accordionItem: '.accordion-container .item:not(.active)',
  slideBlock: '.accordion-container .item:not(.active) .slide-block',
  itemHeadingWrapper: '.accordion-container .item:not(.active) .opener',
  itemHeading: '.accordion-container .item:not(.active) .opener > span:last-child',
  iconExpand: '.accordion-container .item:not(.active) .icon-zoomIn',
  accordionStandartFirstItemOpener: '.accordion-standard .item:first-child .opener',
  accordionStandartItemOpener: '.accordion-standard .item .opener',
  footerStandard: '.footer-standard__holder',
}

describe('= Accordion Standard =', () => {
  beforeEach(() => {
    const url = "/sapdx-samples/grid-layout/accordion.html";
    browser.urlOnEnv(environmentTypes.TEST_PUBLISH_HOST, url);
    browser.pause(1000);
  });

  describe('= Accordion Heading =', () => {
    it('heading', () => {
      let styles = browser.getComputedStyles(SELECTORS.heading);

      // expect(styles['background-color']).to.match('rgba(0, 0, 0, 0)');
      // expect(styles['font-family']).to.match(sap_light_with_fallbacks);
      expect(styles['line-height']).to.be.equal('20px');
      expect(styles['margin-bottom']).to.be.equal('20px');
      browser.highlightCheckedElement(SELECTORS.heading);
      // TimelineReporter.addContext({
      //   title: 'heading',
      //   value: 'user id created during the test'
      // });
    });
  });

  describe('= Accordion collapsed item =', () => {
    it('accordionItem', () => {
      let styles = browser.getComputedStyles(SELECTORS.accordionItem);

      expect(styles['border-top-width']).to.be.equal('1px');
      expect(styles['border-bottom-width']).to.be.equal('1px');
      // expect(styles['border-top-color']).to.be.matches(ultra_light_gray_color);
      // expect(styles['border-bottom-color']).to.be.mathces(ultra_light_gray_color);
      browser.highlightCheckedElement(SELECTORS.accordionItem);
      // TimelineReporter.addContext({
      //   title: 'accordionItem',
      //   value: 'user id created during the test'
      // });
    });

    it('iconExpand', () => {
      let styles = browser.getComputedStyles(SELECTORS.iconExpand);

      expect(styles['width']).to.be.equal('16px');
      expect(styles['top']).to.be.equal('15px');
      // expect(styles['color']).to.be.mathces(bright_blue_color);
      browser.highlightCheckedElement(SELECTORS.iconExpand);
      // TimelineReporter.addContext({
      //   title: 'iconExpand',
      //   value: 'user id created during the test'
      // });
    });
  });

  describe('= Accordion expanded item =', () => {
    beforeEach(() => {
      browser.execute(() => {
        return $('.accordion-standard .item:first-child .opener').click();
      });
      browser.pause(3000);
    });
    it('iconCollapse', () => {
      let styles = browser.getComputedStyles(SELECTORS.iconCollapse);

      expect(styles['width']).to.be.equal('16px');
      expect(styles['top']).to.be.equal('15px');
      // expect(styles['color']).to.match(bright_blue_color);
      browser.highlightCheckedElement(SELECTORS.iconCollapse);
      // TimelineReporter.addContext({
      //   title: 'iconCollapse',
      //   value: 'user id created during the test'
      // });
    });
  });

  describe('= Distance top between .opener and .item =', () => {
    it('Distance below .opener and .item', () => {
      let info = browser.insideTopElements(SELECTORS.accordionItem, SELECTORS.iconExpand);

      expect(info).to.be.equal(16);

      // TimelineReporter.addContext({
      //   title: 'Distance below .opener and .item',
      //   value: 'user id created during the test'
      // });
    });
  });

  describe('Checking customNear method', () => {
    it('CustomNear', () => {
      let customNearTop = browser.customNear('.accordion-container > p', '.accordion-standard', 'top');

      expect(customNearTop).to.be.equal(20);
    });
  });
});