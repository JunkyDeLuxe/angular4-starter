describe('login', function() {
	beforeEach(function () {
		browser.get('/login');
	});

	it('should have <my-login>', function () {
		var login = element(by.css('my-app my-login'));
		expect(login.isPresent()).toEqual(true);
	});
});