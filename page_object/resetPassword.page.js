var LoginPage = require('./login.page.js');
var env = require('../environments/environment.js');

var ForgotPasswordPage = Object.create(LoginPage, {

	url:{get: function(){return ("https://" + env.url + ".com/reset");}},
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