describe('Selectors Test', () => {
	beforeEach(() => {
		browser.setWindowSize(1800, 1200);
		browser.url('/');
	});

	it('By ID', () => {
		let clickById = $('#contact-us');
		clickById.click();
		browser.pause(2000);
	});

	it('By Class', () => {
		const clickByClass = $('.section-title');
		clickByClass.click();
		browser.pause(2000);
	});

	it('By Xpath', () => {
		const clickByXpath = $('//h1[text()="CONTACT US"]/../..');
		clickByXpath.click();
		browser.pause(2000);
	});

	it('By Css', () => {
		const clickByCss = $('#contact-us h1');
		clickByCss.click();
		browser.pause(2000);
	});
});
