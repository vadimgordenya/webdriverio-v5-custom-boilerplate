describe('Selectors Test', () => {
	beforeEach(() => {
		browser.setWindowSize(1800, 1200);
		browser.url('/');
	});

	// it('Test waitForExist', () => {
	// 	const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
	// 	clickByXpathSelector.click();
	// 	browser.switchWindow('WebDriver | Ajax-Loader');

	// 	const clickMeButton = $('//*[text()="CLICK ME!"]/..');
	// 	clickMeButton.waitForExist(10000);
	// 	clickMeButton.click();
	// });

	// it('Test waitForDisplayed', () => {
	// 	const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
	// 	clickByXpathSelector.click();
	// 	browser.switchWindow('WebDriver | Ajax-Loader');

	// 	const clickMeButton = $('//*[text()="CLICK ME!"]/..');
	// 	clickMeButton.waitForDisplayed(10000);
	// 	clickMeButton.click();
	// });

	// it('Test waitForEnabled', () => {
	// 	const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
	// 	clickByXpathSelector.click();
	// 	browser.switchWindow('WebDriver | Ajax-Loader');

	// 	const clickMeButton = $('//*[text()="CLICK ME!"]/..');
	// 	// clickMeButton.waitForEnabled(10000, true);
	// 	clickMeButton.waitForEnabled(10000, false);

	// 	browser.pause(8000);
	// 	clickMeButton.waitForEnabled(1000, true);
	// 	clickMeButton.click();

	// 	browser.pause(8000);
	// 	clickMeButton.waitForEnabled(1000, false);
	// 	clickMeButton.click();
	// });

	it('Test Fixed Timeout', () => {
		const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
		clickByXpathSelector.click();
		browser.switchWindow('WebDriver | Ajax-Loader');

		const clickMeButton = $('//*[text()="CLICK ME!"]/..');
		browser.pause(12000);
		clickMeButton.click();
	});
});
