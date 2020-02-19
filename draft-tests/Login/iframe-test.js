// describe('Test Login', () => {
// 	beforeEach(() => {
// 		browser.setWindowSize(1800, 1200);
// 		browser.url('/');
// 		browser.pause(2000);
// 	});

// 	it('Test login on sap.com', () => {
// 		const loginBtn = $('//*[@id="auth"]/div/a/span[2]');

// 		loginBtn.waitForDisplayed();
// 		loginBtn.click();
// 		browser.pause(2000);

// 		const iframe = $('.form-iframe');
// 		browser.switchToFrame(iframe);
// 		browser.pause(3000);

// 		const iframeLogin = $('.form-login-iframe');
// 		iframeLogin.waitForDisplayed();

// 		browser.switchToFrame(iframeLogin);

// 		const j_username = $('#j_username');
// 		const j_password = $('#j_password');
// 		j_username.waitForDisplayed();
// 		j_password.waitForDisplayed();

// 		j_username.setValue('C5279451');
// 		j_password.setValue('********');
// 		browser.pause(2000);

// 		const buttonSubmit = $('#logOnFormSubmit');
// 		buttonSubmit.waitForDisplayed();
// 		buttonSubmit.click();
// 		browser.pause(4000);

// 		browser.switchToParentFrame();
// 		browser.pause(2000);
// 		browser.switchToParentFrame();
// 		browser.pause(4000);

// 		const isLoggedTitle = $('//*[@id="auth"]/div/a').getAttribute('title');

// 		assert.strictEqual(isLoggedTitle, 'Vadzim Hardzenia');
// 	});
// });