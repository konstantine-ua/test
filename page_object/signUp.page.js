var LoginPage = require('./login.page.js');

var SignUpPage = Object.create(LoginPage, {

	url:{get: function(){return "https://QA_SITE/signup";}},
	name: {get: function(){return $('//input[@formcontrolname="user_name"]')}},
	confirmPassword: {get: function() {return $('//input[@formcontrolname="confirmPassword"]');}},
	alreadyMember: {get: function(){return $('//a[@href="/login"]');}},

//*** METHODS OF THE Sign Up Page

	signUpAction:{
		value: function (name, email, password, confirmPassword){
			this.name.setValue(name);
			this.email.setValue(email);
			this.password.setValue(password);
			this.confirmPassword.setValue(confirmPassword);
			this.button.click();
			return;
		}
	}
});

module.exports = SignUpPage;