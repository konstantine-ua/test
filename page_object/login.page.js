var Page = require('./pageObject.js');
var env = require('../environments/environment.js');

var LoginPage = Object.create(Page, {

	url:{get: function(){return ("https://" + env.url + ".com/login");}},
	logo: {get: function() {return $('//img');}},
	email:{get: function() {return $('//input[@formcontrolname="email"]');}},
	password: {	get: function() {return $('//input[@formcontrolname="password"]');}},
	forgotPasswordLink: {get: function() {return $('//a[@href="/reset"]');}},
	button: {get: function() {return $('//button');}},
	notMember: {get: function(){return $('//a[@href="/signup"]');}},


//*** METHODS OF THE Login Page

	loginAction:{
		value: function (email, password){
			this.email.setValue(email)
			this.password.setValue(password)
			this.loginButton.click();
			return;
		}
	}
});

module.exports = LoginPage;