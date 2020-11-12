const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('dev@rallyware.com', 'Banyaspaces350');
        //expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.getTitle).toHaveTextContaining('Home - Climate Superstars');
    });
});


