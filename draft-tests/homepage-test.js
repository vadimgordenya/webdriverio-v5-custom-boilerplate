import assert from 'assert';

describe('Test webdriveruni homepage', () => {
	it('Validate whether the webdriver uni homepage title is corrct', () => {
		browser.url('./');
		const title = browser.getTitle();

		assert.strictEqual(title, 'WebDriverUniversity.com');
	});
});
