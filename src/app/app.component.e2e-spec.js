describe('App', function () {
	beforeEach(function () {
		browser.get('/');
	});

	it('should have <main>', function () {
		expect(element(by.css('my-app main')).isPresent()).toEqual(true);
	});
});