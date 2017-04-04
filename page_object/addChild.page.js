var Page = require('./pageObject.js');
var env = require('../environments/environment.js');

var AddChildPage = Object.create(Page, {

	url:{get: function(){return "https://QA_SITE/add-child";}},
	logo: {get: function() {return $('//op-home-logo/div/a');}},
	addChildButton: {get: function(){return $('//a[@href="/add-child"]')}},
	
	email:{get: function() {return $('//input[@formcontrolname="email"]');}},
	password: {	get: function() {return $('//input[@formcontrolname="password"]');}},
	confirmPassword: {get: function() {return $('//input[@formcontrolname="confirmPassword"]');}},
	signUpButton: {get: function() {return $('//span[contains(., "Sign Up")]');}},
	alreadyMember: {get: function(){return $('//a[@href="/login"]');}},


//*** METHODS OF THE Add Child  Page

	// signUpAction:{
	// 	value: function (name, email, password, confirmPassword){
	// 		this.name.setValue(name);
	// 		this.email.setValue(email);
	// 		this.password.setValue(password);
	// 		this.confirmPassword.setValue(confirmPassword);
	// 		this.signUpButton.click();
	// 		return;
	// 	}
	// }
});

module.exports = AddChildPage;