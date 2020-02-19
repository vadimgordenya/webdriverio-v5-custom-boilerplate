import { checkCssProperty, getComputetStyles } from '../../helpers/helpers';
import { expect } from 'chai';

/**
 * Page Rating component
 */

describe('Page Rating component', () => {
  beforeEach(() => {
    // browser.url('/registration/contact.html');
    browser.url('/');
    browser.pause(2000);
  });

  describe('Distance between body-text and button', () => {
    beforeEach(() => {

    });
    it('Distance between body-text and button should be 34px', () => {
      const bodyText = '#sap-s4hana .body-text';
      const button = '#sap-s4hana .buttons li';
      const distanceBetweenElements = browser.belowBetweenElements(bodyText, button);

      assert.strictEqual(distanceBetweenElements, 34);
    });

    // it('Check font size for body-text', () => {
    //   const styles = browser.getComputetStyles('#sap-s4hana .body-text');

    //   expect(styles['font-size']).to.be.equal('28px');
    // });
  });

  // describe('Page Rating container-extended', () => {
  //   const pageRating = '.page-rating-wrapper .pageRating';

  //   afterEach(() => {
  //     browser.takeScreenshot();
  //   });

  //   it('Page Rating should be has css property "background-color" - #424242 or rgba(66,66,66,1)', () => {
  //     checkCssProperty(pageRating, ['background-color', 'rgba(66,66,66,1)']);
  //   });

  //   it('Page Rating should be has css property "color" - #eaeaea or rgba(234,234,234,1)', () => {
  //     checkCssProperty(pageRating, ['color', 'rgba(234,234,234,1)']);
  //   });

  //   it('Question Headline should be has css property "padding-top" - 1.25 or 20px', () => {
  //     checkCssProperty(pageRating, ['padding-top', '20px']);
  //   });

  //   it('Question Headline should be has css property "padding-bottom" - 3.25rem or 52px', () => {
  //     checkCssProperty(pageRating, ['padding-bottom', '52px']);
  //   });
  //   browser.execute(() => {
  //     return $(pageRating).css('border', '2px solid red');
  //   });
  // });

  // describe('Question Headline', () => {
  //   const questionHeadline = '.question-headline';

  //   it('Question Headline should be has css property "font-size" - 1.69rem or 27.04px', () => {
  //     checkCssProperty(questionHeadline, ['font-size', '27.04px']);
  //   });

  //   it('Question Headline should be has css property "padding-top" - 2rem or 32px', () => {
  //     checkCssProperty(questionHeadline, ['padding-top', '32px']);
  //   });
  // });

  // describe('Question Buttons wrapper', () => {
  //   const questionButtonsWrapper = '.question-buttons';

  //   it('Question Buttons wrapper should be has css property "padding-top" - 2rem or 32px', () => {
  //     checkCssProperty(questionButtonsWrapper, ['padding-top', '32px']);
  //   });
  // });

  // describe('LikeButton', () => {
  //   const likeButton = '.like-button';

  //   it('Like Button should be has css property "background-color" - #007db8 or rgba(0, 125, 184, 1)', () => {
  //     checkCssProperty(likeButton, ['background-color', 'rgba(0,125,184,1)']);
  //   });

  //   it('Like button should be has css property "color" -  #fff or rgba(255,255,255,1)', () => {
  //     checkCssProperty(likeButton, ['color', 'rgba(255,255,255,1)']);
  //   });

  //   it('Like Button should be has css propertys "padding-left" and "padding-right" - 2rem or 32px', () => {
  //     checkCssProperty(likeButton, ['padding-left', '32px']);
  //     checkCssProperty(likeButton, ['padding-right', '32px']);
  //   });

  //   it('Like button should be has css propertys "font-family" - SAPBook', () => {
  //     checkCssProperty(likeButton, ['font-family', 'sapbook']);
  //   });

  //   it('Like button should be has css property "font-weight" - 400', () => {
  //     checkCssProperty(likeButton, ['font-weight', 400]);
  //   });

  // });

  // describe('DislikeButton', () => {
  //   const dislikeButton = '.dislike-button';

  //   it('Dislike Button should be has css property "backround-color" - rgba(0, 125, 184, 1)', () => {
  //     checkCssProperty(dislikeButton, ['background-color', 'rgba(0,125,184,1)']);
  //   });

  //   it('Dislike button should be has css property "color" -  #fff or rgba(255,255,255,1)', () => {
  //     checkCssProperty(dislikeButton, ['color', 'rgba(255,255,255,1)']);
  //   });

  //   it('Disalike Button should be has css propertys "padding-left" and "padding-right" - 2rem  = 32px', () => {
  //     checkCssProperty(dislikeButton, ['padding-left', '32px']);
  //     checkCssProperty(dislikeButton, ['padding-right', '32px']);
  //   });

  //   it('Like button should be has css propertys "font-family" - SAPBook', () => {
  //     checkCssProperty(dislikeButton, ['font-family', 'sapbook']);
  //   });

  //   it('Like button should be has css property "font-weight" - 400', () => {
  //     checkCssProperty(dislikeButton, ['font-weight', 400]);
  //   });
  // });

  // describe('Submit Like Button', () => {
  //   const likeButton = '.like-button';

  //   it('Submit action', () => {
  //     $(likeButton).scrollIntoView();
  //     $(likeButton).waitForClickable({ timeout: 3000 });
  //     $(likeButton).click();
  //     browser.pause(5000);
  //     const ThankYouMessage = $('.thanksLikeBlock div').getText();

  //     assert.strictEqual(ThankYouMessage, 'Thank you!');
  //   });
  // });

});