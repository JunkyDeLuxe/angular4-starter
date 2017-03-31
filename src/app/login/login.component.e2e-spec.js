describe('Login', function () {
	beforeEach(function () {
		browser.get('/login');
	});

	it('should have <my-login>', function () {
		var login = element(by.css('my-app my-login'));
		expect(login.isPresent()).toEqual(true);

		login.element(by.name("email")).sendKeys("test@gmail.com");
		login.element(by.name("password")).sendKeys("azerty1988");

		login.element(by.className("btn")).click();

		/** Ajax call login here, waiting post request finished **/
		browser.waitForAngular().then(function () {
			const success = login.element(by.className("alert-success"));
			expect(success.isPresent()).toEqual(true);
		});
	});
});