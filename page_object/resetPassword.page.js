var LoginPage = require('./login.page.js');

var ForgotPasswordPage = Object.create(LoginPage, {

	url:{get: function(){return "https://QA_SITE/reset";}},
	alreadyMember: {get: function(){return $('//a[@href="/login"]');}},

//*** METHODS OF THE Forgot Password Page

	resetPasswordAction:{
		value: function (newEmail){
			this.email.setValue(newEmail);
			this.button.click();
			return;
		}
	}
});

module.exports = ForgotPasswordPage;