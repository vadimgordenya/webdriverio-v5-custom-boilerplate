export default function customNear(firstElem, secondElem, typePosition) {
  let offsetDistanceFirstElement;
  let offsetDistanceSecondElement;
  let result;

  if (typePosition === 'left') {
    left();
  } else if (typePosition === 'top') {
    top();
  } else {
    throw new Error(`You passed incorrect value for typePosition. Your value is ${typePosition}, but should be "left or top"`);
  }

  function left() {
    offsetDistanceFirstElement = browser.execute((firstElem) => {
      return $(firstElem).offset().left + $(firstElem).width();
    }, firstElem);
    offsetDistanceSecondElement = browser.execute((secondElem) => {
      return $(secondElem).offset().left;
    }, secondElem);
  }

  function top() {
    offsetDistanceFirstElement = browser.execute((firstElem) => {
      return $(firstElem).offset().top + $(firstElem).height();
    }, firstElem);
    offsetDistanceSecondElement = browser.execute((secondElem) => {
      return $(secondElem).offset().top;
    }, secondElem);
  }

  browser.highlightCheckedElement(firstElem);
  browser.highlightCheckedElement(secondElem);
  browser.takeScreenshot();

  result = offsetDistanceSecondElement - offsetDistanceFirstElement;

  if (result > 0) {
    return result
  } else {
    throw new Error(`Something wrong!You passed elements, that don't have any "${typePosition}" distance value. Value for ${typePosition} need to be positive."`);
  }
}