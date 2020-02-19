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

		const loginPageTitle = browser.getTitle();
		const loginUrl = browser.getUrl();

		expect(loginPageTitle).to.contains('Login Portal');
		expect(loginUrl).to.contains('Login-Portal');

		assert.equal(loginPageTitle, 'WebDriver | Login Portal');
		assert.equal(
			loginUrl,
			'http://www.webdriveruniversity.com/Login-Portal/index.html'
		);

		browser.closeWindow();
		browser.pause(2000);
	});
});
