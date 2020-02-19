describe('Inject javascript into the target website', () => {
	beforeEach(() => {
		browser.setWindowSize(1800, 1200);
		browser.url('/');
	});

	it('Change body background color on sap.com', () => {
		browser.execute(() => {
			return $('body').css('background', 'red');
		});
		browser.pause(3000);
	});
});
