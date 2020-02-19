/**
 * customCentered - checks that object is centered inside another object;
 * @param {String} container
 * @param {String} element
 * @param {Object} typeCentered - may take values { top: '20px', right: '10px', bottom: '20px', left: '10px'}
 */
export default function customInside(container, element, typeCentered) {
  $(container).scrollIntoView({ block: "center", inline: "center" });
  return browser.execute((container, element, typeCentered) => {

    const containerOffsetTop = Math.round($(container).offset().top);
    const containerOffsetBottom = Math.round($(container).offset().top + $(container).innerHeight());

    const elementOffsetTop = Math.round($(element).offset().top);
    const elementOffsetBottom = Math.round($(element).offset().top + $(element).innerHeight());

    const containerOffsetLeft = Math.round($(container).offset().left);
    const containerOffsetRight = Math.round($(container).offset().left + $(container).innerWidth());

    const elementOffsetLeft = Math.round($(element).offset().left);
    const elementOffsetRight = Math.round($(element).offset().left + $(element).innerWidth());

    const topValue = elementOffsetTop - containerOffsetTop;
    const rightValue = containerOffsetRight - elementOffsetRight;
    const bottomValue = containerOffsetBottom - elementOffsetBottom;
    const leftValue = elementOffsetLeft - containerOffsetLeft;

    if (
      checkValue(topValue, typeCentered.top) &&
      checkValue(rightValue, typeCentered.right) &&
      checkValue(bottomValue, typeCentered.bottom) &&
      checkValue(leftValue, typeCentered.left)
    ) {
      drawLinesBetweenElements(container, element, 'top right bottom left');
      return true;
    } else if (
      checkValue(topValue, typeCentered.top) &&
      checkValue(rightValue, typeCentered.right)
    ) {
      drawLinesBetweenElements(container, element, 'top right');
      return true;
    } else if (
      checkValue(topValue, typeCentered.top) &&
      checkValue(rightValue, typeCentered.left)
    ) {
      drawLinesBetweenElements(container, element, 'top left');
      return true;
    } else if (
      checkValue(topValue, typeCentered.top) &&
      checkValue(rightValue, typeCentered.bottom)
    ) {
      drawLinesBetweenElements(container, element, 'top bottom');
      return true;
    } else if (
      checkValue(topValue, typeCentered.left) &&
      checkValue(rightValue, typeCentered.right)
    ) {
      drawLinesBetweenElements(container, element, 'left right');
      return true;
    } else if (
      checkValue(topValue, typeCentered.right) &&
      checkValue(rightValue, typeCentered.bottom)
    ) {
      drawLinesBetweenElements(container, element, 'right bottom');
      return true;
    } else if (
      checkValue(topValue, typeCentered.left) &&
      checkValue(rightValue, typeCentered.bottom)
    ) {
      drawLinesBetweenElements(container, element, 'left bottom');
      return true;
    }
    else {
      throw new Error(`You passed incorrect value for typeCentered 
											 or element not centered. Your value is ${typeCentered.top}, ${typeCentered.right}, ${typeCentered.bottom}, ${typeCentered.left}, 
											 but should be "all, verrtical or horizontal."`);
    }
    /**
     * Function that draw lines between elements
     * @param {String} container 
     * @param {String} element 
     * @param {String} typeLines 
     */
    function drawLinesBetweenElements(container, element, typeLines) {
      const topLine = `
        <div 
          style="
            position: absolute;
            top: ${$(container).offset().top}px;
            right: ${$(container).offset().left + ($(container).innerWidth() / 2)}px;
            height: ${$(element).offset().top - $(container).offset().top}px;
            width: 2px;
            color: #fff;
            background: #B55CFF;
            z-index: 99999;"
          >
          <span style="background: #000;position: absolute;top: 0;left: 7px;margin: auto;padding: 3px;">${Math.round($(element).offset().top - $(container).offset().top)}px</span>
        </div>`;

      const rightLine = `
        <div
          style="
            position: absolute;
            top: ${$(element).offset().top + ($(element).innerHeight() / 2) - 2}px;
            left: ${$(element).offset().left + $(element).innerWidth()}px;
            height: 2px;
            width: ${($(container).offset().left + $(container).innerWidth()) - ($(element).offset().left + $(element).innerWidth())}px;
            color: #fff;
            border-bottom: 2px solid #B55CFF;
            text-align: center;
            z-index: 99999;"
          >
          <span style="background: #000;position: absolute;top: 7px;margin: auto;padding: 3px;">${Math.round(($(container).offset().left + $(container).innerWidth()) - ($(element).offset().left + $(element).innerWidth()))}px</span>
        </div>`;

      const bottomLine = `
        <div 
          style="
            position: absolute;
            top: ${$(element).offset().top + $(element).innerHeight()}px;
            right: ${$(container).offset().left + ($(container).innerWidth() / 2)}px;
            height: ${($(container).offset().top + $(container).innerHeight()) - ($(element).offset().top + $(element).innerHeight())}px;
            width: 2px;
            color: #fff;
            background: #B55CFF;
            z-index: 99999;"
          >
          <span style="background: #000;position: absolute;top: 0;left: 7px;margin: auto;padding: 3px;">${Math.round(($(container).offset().top + $(container).innerHeight()) - ($(element).offset().top + $(element).innerHeight()))}px</span>
        </div>`;

      const leftLine = `
        <div
          style="
            position: absolute;
            top: ${$(element).offset().top + ($(element).innerHeight() / 2) - 2}px;
            left: ${$(container).offset().left}px;
            width: ${$(element).offset().left - $(container).offset().left}px;
            color: #fff;
            height: 2px;
            border-bottom: 2px solid #B55CFF;
            text-align: center;
            z-index: 99999;"
          >
            <span style="background: #000;position: absolute;top: 7px;margin: auto;padding: 3px;">${Math.round($(element).offset().left - $(container).offset().left)}px</span>
        </div>`;

      switch (typeLines) {
        case 'top right bottom left':
          $('body').append(topLine, rightLine, bottomLine, leftLine);
          break;
        case 'top right':
          $('body').append(topLine, rightLine);
          break;
        case 'top bottom':
          $('body').append(topLine, bottomLine);
          break;
        case 'top left':
          $('body').append(topLine, leftLine);
          break;
        case 'left right':
          $('body').append(leftLine, rightLine);
          break;
        case 'right bottom':
          $('body').append(rightLine, bottomLine);
          break;
        case 'left bottom':
          $('body').append(leftLine, bottomtLine);
          break;
      }
    }

    function checkValue(value, positionValue) {
      return value === positionValue ? true : false;
    }
  }, container, element, typeCentered);
}