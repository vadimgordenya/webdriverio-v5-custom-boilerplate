describe('Chai assertions', () => {
	beforeEach(() => {
		browser.setWindowSize(1800, 1200);
		browser.url('/');
	});

	it('Test webdriveruni login portal', () => {
		let clickById = $('#login-portal');
		clickById.click();

		browser.switchWindow('WebDriver | Login Portal');
		browser.pause(2000);

		// const loginPageTitle = browser.getTitle();
		// const loginUrl = browser.getUrl();

		const loginPageData = browser.getUrlAndTitle();

		expect(loginPageData.title).to.contains('Login Portal');
		expect(loginPageData.url).to.contains('Login-Portal');
	});
});
