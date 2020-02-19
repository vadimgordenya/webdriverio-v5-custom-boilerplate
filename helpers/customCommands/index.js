import { environmentTypes } from '../../properties/enviromentProperties';

const {
	PROD_PUBLISH_HOST, QA_PUBLISH_HOST,
	QA_CHINA_PUBLISH_HOST, QA_DEVELOPERS_HOST,
	QA_BLUE_PUBLISH_HOST, TEST_PUBLISH_HOST,
	TEST_CHINA_PUBLISH_HOST, TEST_BLUE_CHINA_PUBLISH_HOST,
	TEST_BLUE_PUBLISH_HOST, TEST_DEVELOPERS_HOST,
	TEST_BLUE_DEVELOPERS_PUBLISH_HOST, DEV_BLUE_PUBLISH_HOST,
} = environmentTypes;

/**
 * GALENS METHODS 
 * 1) Near      - checks that object is located near another object;
 * 2) Below     - checks that an element is located below other object;
 * 3) Above     - checks that an element is located above other object;
 * 4) Left of   - check that the object is located near another object from left;
 * 5) Right of  - check that the object is located near another object from right;
 * 6) Inside    - checks that object is located inside another object;
 * 7) aligned   - checks horizontal or vertical alignment of object with other objects on page;
 * 8) centered  - checks that object is centered inside another object;
 * 9) absent    - checks that object is either missing on page or is not visible;
 * 10) contains - checks that object visually contains other objects inside it.
 * */

/**
 * Near - checks that object is located near another object;
 * @param {String} firstElem
 * @param {String} secondElem
 * @param {String} typePosition
 * 
 * need to continue...
 */
browser.addCommand('customNear', function (firstElem, secondElem, typePosition) {
	try {
		let offsetDistanceFirstElement;
		let offsetDistanceSecondElement;
		let result;

		if (typePosition === 'left') {
			offsetDistanceFirstElement = browser.execute((firstElem) => {
				return $(firstElem).offset().left + $(firstElem).width();
			}, firstElem);
			offsetDistanceSecondElement = browser.execute((secondElem) => {
				return $(secondElem).offset().left;
			}, secondElem);
		} else if (typePosition === 'top') {
			offsetDistanceFirstElement = browser.execute((firstElem) => {
				return $(firstElem).offset().top + $(firstElem).height();
			}, firstElem);
			offsetDistanceSecondElement = browser.execute((secondElem) => {
				return $(secondElem).offset().top;
			}, secondElem);
		} else {
			throw new Error(`You passed incorrect value for typePosition. Your value is ${typePosition}, but should be "left or top"`);
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
	} catch (error) {
		return error;
	}
});

/**
 * Centered - checks that object is centered inside another object;
 * @param {String} container
 * @param {String} element
 * 
 * need to continue...
 */
browser.addCommand('customCentered', function (container, element, typeCentered) {
	return browser.execute((container, element, typeCentered) => {
		const containerOffsetTop = $(container).offset().top;
		const containerOffsetBottom = $(container).offset().top + $(container).innerHeight();

		const elementOffsetTop = $(element).offset().top;
		const elementOffsetBottom = $(element).offset().top + $(element).innerHeight();

		const containerOffsetLeft = $(container).offset().left;
		const containerOffsetRight = $(container).offset().top + $(container).innerWidth();

		const elementOffsetLeft = $(element).offset().left;
		const elementOffsetRight = $(element).offset().left + $(element).innweWidth();

		const checkVerticalCentered = ((elementOffsetTop - containerOffsetTop) === (containerOffsetBottom - elementOffsetBottom)) ? true : false;
		const checkHorizontalCentered = ((elementOffsetLeft - containerOffsetLeft) === (containerOffsetRight - elementOffsetRight)) ? true : false;

		if (typeCentered === "all" && checkVerticalCentered && checkHorizontalCentered) {
			return true;
		} else if (typeCentered === "vertical" && checkVerticalCentered) {
			return true;
		} else if (typeCentered === "horizontal" && checkHorizontalCentered) {
			return true;
		} else {
			throw new Error(`You passed incorrect value for typeCentered 
											 or element not centered. Your value is ${typeCentered}, 
											 but should be "all, verrtical or horizontal.${checkVerticalCentered}, ${checkHorizontalCentered}"`);
		}
	}, container, element, typeCentered);
});

/**
 * Method that test if an element is located below another element
 * @param {String} firstElem
 * @param {String} secondElem
 */
browser.addCommand('belowBetweenElements', function (firstElem, secondElem) {
	const offsetTopFirstElement = browser.execute((firstElem) => {
		return $(firstElem).offset().top + $(firstElem).height();
	}, firstElem);
	const offsetTopSecondElement = browser.execute((secondElem) => {
		return $(secondElem).offset().top;
	}, secondElem);

	browser.highlightCheckedElement(firstElem);
	browser.highlightCheckedElement(secondElem);
	browser.takeScreenshot();

	return offsetTopFirstElement - offsetTopSecondElement;
});

/**
 * Inside verifies that an element is visually top value inside another element
 * @param {String} firstElem
 * @param {String} secondElem
 */
browser.addCommand('insideTopElements', function (firstElem, secondElem) {
	const offsetTopFirstElement = browser.execute((firstElem) => {
		return $(firstElem).offset().top;
	}, firstElem);
	const offsetTopSecondElement = browser.execute((secondElem) => {
		return $(secondElem).offset().top;
	}, secondElem);

	browser.highlightCheckedElement(firstElem);
	browser.highlightCheckedElement(secondElem);
	browser.takeScreenshot();

	return offsetTopSecondElement - offsetTopFirstElement;
});

/**
 * Method that return computed styles for transmitted selector
 */
browser.addCommand('getComputedStyles', (element) => {
	return browser.execute(function (element) {
		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
		function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
		function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
		function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

		const computedStyle = window.getComputedStyle(document.querySelector(element));

		return _toConsumableArray(computedStyle).reduce(function (elementStyles, property) {
			return _objectSpread({}, elementStyles, _defineProperty({}, property, computedStyle.getPropertyValue(property)));
		}, {});
	}, element);
});

/**
 * 
 */
browser.addCommand('leftOfElement', function (element1, element2) {
	return browser.execute((element1, element2) => {
		const element1OffsetLeft = $(element1).offset().left + $(element1).width();
		const element2OffsetLeft = $(element2).offset().left;

		return element2OffsetLeft - element1OffsetLeft;
	}, element1, element2);
});

/**
 * @param {String} element1
 * @param {String} element2
 */
browser.addCommand('rightOfElement', function (element1, element2) {
	return browser.execute((element1, element2) => {
		const element1OffsetLeft = $(element1).offset().left + $(element1).width();
		const element2OffsetLeft = $(element2).offset().left;

		return element2OffsetLeft - element1OffsetLeft;
	}, element1, element2);
});

/**
 * @param {String} env
 * @param {String} url
 */
browser.addCommand('urlOnEnv', function (env, url) {
	let fullURL = '';
	switch (env) {
		case PROD_PUBLISH_HOST:
			fullURL += PROD_PUBLISH_HOST + url;
			break;
		case QA_PUBLISH_HOST:
			fullURL += QA_PUBLISH_HOST + url;
			break;
		case QA_CHINA_PUBLISH_HOST:
			fullURL += QA_CHINA_PUBLISH_HOST + url;
			break;
		case QA_DEVELOPERS_HOST:
			fullURL += QA_DEVELOPERS_HOST + url;
			break;
		case QA_BLUE_PUBLISH_HOST:
			fullURL += QA_BLUE_PUBLISH_HOST + url;
			break;
		case TEST_PUBLISH_HOST:
			fullURL += TEST_PUBLISH_HOST + url;
			break;
		case TEST_CHINA_PUBLISH_HOST:
			fullURL += TEST_CHINA_PUBLISH_HOST + url;
			break;
		case TEST_BLUE_CHINA_PUBLISH_HOST:
			fullURL += TEST_BLUE_CHINA_PUBLISH_HOST + url;
			break;
		case TEST_BLUE_PUBLISH_HOST:
			fullURL += TEST_BLUE_PUBLISH_HOST + url;
			break;
		case TEST_DEVELOPERS_HOST:
			fullURL += TEST_DEVELOPERS_HOST + url;
			break;
		case TEST_BLUE_DEVELOPERS_PUBLISH_HOST:
			fullURL += TEST_BLUE_DEVELOPERS_PUBLISH_HOST + url;
			break;
		case DEV_BLUE_PUBLISH_HOST:
			fullURL += DEV_BLUE_PUBLISH_HOST + url;
			break;
	}

	return browser.url(fullURL);
});

/**
 * Command that added focus and title with name element
 * @param {String} positionTitle - should be top or bottom. Default top.
 */
browser.addCommand('highlightCheckedElement', function (element, positionTitle) {
	return browser.execute((element, positionTitle) => {
		const getRandomInt = (min, max) => {
			return Math.floor(Math.random() * (max - min)) + min;
		};
		const randomColors = ['#FF5C98', '#B55CFF'];
		const getRandomColor = randomColors[getRandomInt(0, randomColors.length - 1)];
		let positionTitleValue = positionTitle ? 'bottom' : 'top';

		$('body').append(`<div
			style="
				position: absolute;
				top: ${$(element).offset().top - 2 + 'px'};
				left: ${$(element).offset().left - 2 + 'px'};
				height: ${$(element).innerHeight() + 'px'};
				width: ${$(element).innerWidth() + 'px'};
				border: 2px solid ${ getRandomColor};
			"></div>`);
		$('body').append(`<div
			style="
				position: absolute;
				display: inline-block;
				border: 2px solid ${ getRandomColor};
				width: auto;
				padding: 2px 5px;
				top: ${ (positionTitleValue === 'top') ? $(element).offset().top - 25 + 'px' : ($(element).offset().top + $(element).innerHeight()) - 2 + 'px'};
				left: ${ $(element).offset().left - 2 + 'px'};
				font-size: 0.8em;
				color: #fff;
				background: ${ getRandomColor};
			">${element}</div>`);
	}, element, positionTitle);
});