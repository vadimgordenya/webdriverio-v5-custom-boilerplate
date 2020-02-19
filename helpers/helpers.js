import assert from 'assert';

/**
 * function checkCssProperty using for checking css property or array consist css properties
 *
 * @param {String} element - selector of element
 * @param {Array} typeCssProperty - array with types of css properties
 */

export function checkCssPropertys(element, typeCssProperty) {
	element.scrollIntoView();
	typeCssProperty.forEach(function (item) {
		const cssProperty = element.getCSSProperty(item[0]).value;
		assert.strictEqual(cssProperty, item[1]);
	});
}

/**
 * function checkCssProperty using for checking css property or array consist css properties
 *
 * @param {String} element - selector of element
 * @param {Array} typeCssProperty - array with types of css properties
 */

export function checkCssProperty(element, typeCssProperty) {
	$(element).scrollIntoView();
	const cssProperty = $(element).getCSSProperty(typeCssProperty[0]).value;
	assert.strictEqual(cssProperty, typeCssProperty[1]);
}

