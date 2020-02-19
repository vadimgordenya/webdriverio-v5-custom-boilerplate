/**
 * customCentered - checks that object is centered inside another object;
 * @param {String} container
 * @param {String} element
 * @param {String} typeCentered - may take values: all, vertical and horizontal
 */
export default function customCentered(container, element, typeCentered) {
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

    const checkVerticalCentered = ((elementOffsetTop - containerOffsetTop) === (containerOffsetBottom - elementOffsetBottom)) ? true : false;
    const checkHorizontalCentered = ((elementOffsetLeft - containerOffsetLeft) === (containerOffsetRight - elementOffsetRight)) ? true : false;

    if (typeCentered === "all") {
      if (checkVerticalCentered && checkHorizontalCentered) {
        drawLinesBetweenElements(container, element, 'all');
        return true;
      } else {
        throw new Error(`Container and element aren't aligned vertical and horizontal. 
                         Difference for vertical: ${(elementOffsetTop - containerOffsetTop) + " != " + (containerOffsetBottom - elementOffsetBottom)}, 
                         Difference for horizontal: ${(elementOffsetLeft - containerOffsetLeft) + " != " + (containerOffsetRight - elementOffsetRight)}"`);
      }
    } else if (typeCentered === "vertical") {
      if (checkVerticalCentered) {
        drawLinesBetweenElements(container, element, 'vertical');
        return true;
      } else {
        throw new Error(`Container and element aren't aligned vertical. 
                        Difference for vertical: ${(elementOffsetTop - containerOffsetTop) + " != " + (containerOffsetBottom - elementOffsetBottom)}"`);
      }
    } else if (typeCentered === "horizontal") {
      if (checkHorizontalCentered) {
        drawLinesBetweenElements(container, element, 'horizontal');
        return true;
      } else {
        throw new Error(`Container and element aren't aligned horizontal.
                         Difference for horizontal: ${(elementOffsetLeft - containerOffsetLeft) + " != " + (containerOffsetRight - elementOffsetRight)}"`);
      }
    } else {
      throw new Error(`You passed incorrect value for typeCentered 
											 or element not centered. Your value is ${typeCentered}, 
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
            background: #B55CFF;"
          >
          <span style="background: #000;">${Math.round($(element).offset().top - $(container).offset().top)}px</span>
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
            text-align: center;"
          >
          <span style="background: #000;">${Math.round(($(container).offset().left + $(container).innerWidth()) - ($(element).offset().left + $(element).innerWidth()))}px</span>
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
            background: #B55CFF;"
          >
          <span style="background: #000;">${Math.round(($(container).offset().top + $(container).innerHeight()) - ($(element).offset().top + $(element).innerHeight()))}px</span>
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
            text-align: center;"
          >
            <span style="background: #000;">${Math.round($(element).offset().left - $(container).offset().left)}px</span>
        </div>`;

      switch (typeLines) {
        case 'all':
          $('body').append(topLine, rightLine, bottomLine, leftLine);
          break;
        case 'vertical':
          $('body').append(topLine, bottomLine);
          break;
        case 'horizontal':
          $('body').append(rightLine, leftLine);
          break;
      }
    }
  }, container, element, typeCentered);
}