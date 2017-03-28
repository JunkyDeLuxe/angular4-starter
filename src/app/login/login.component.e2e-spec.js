describe('login form', function () {
	beforeEach(function () {
		browser.get('/login');
	});

	it('should display login user ...', function () {
		const login = element(by.className('login'));;

		expect(login.isPresent()).toEqual(false);

		login.element(by.name("email")).sendKeys("test@gmail.com");
		login.element(by.name("password")).sendKeys("azerty1988");

		login.element(by.className("btn")).click();

		const success = login.element(by.className("alert-success"));

		expect($(success).isPresent()).toBeFalsy();
	});
});