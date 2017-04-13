"use strict";

var LoginPage = require('../page_object/login.page.js');
var Footer = require('../page_object/pageObject.js');
var expect = require('chai').expect;
var SignUpPage = require('../page_object/signUp.page.js');
var ForgotPasswordPage = require('../page_object/resetPassword.page.js');
var AddChildPage = require('../page_object/addChild.page.js');


describe('WEB APP', function(){
	beforeEach(function () {
			webClient.windowHandleMaximize();
			webClient.url('/');
		});

describe('Appium verification', function(){
	it.only ('should start appium and selenium', function(){
    	appiumClient.pause(5000);
    	appiumClient.back();
    	appiumClient.click("//android.widget.TextView[7]");
    	appiumClient.back();
    	webClient.url("https://www.google.com");
	});
});	

	describe('2.3 Features', function(){
		
		describe('should vaidate that the login/signup/forgot password screen can be reached via landing', function(){
			
			it('should vaidate that the login screen can be reached via landing', function(){
			expect(browser.getUrl()).to.equal(LoginPage.url);
			});

			it('should validate that the signup screen can be reached via landing', function(){
			LoginPage.signUpLink.click();
			expect(browser.getUrl()).to.equal(SignUpPage.url);
			});

			it('should validate that the forgot password screen can be reached via landing', function(){
			LoginPage.forgotPasswordLink.click();
			expect(browser.getUrl()).to.equal(ForgotPasswordPage.url);
			});
		});
		
			it('should validate that the user can create an account', function(){
			LoginPage.signUpLink.click();
			//VERIFICATION OF THE ALREADY EXISTING NAME SHOULD BE WRITTEN. 
			//AUTONAME SHOULD BE WRITTEN
			SignUpPage.signUpAction('autTest','autTest@mailinator.com', 'qwerty', 'qwerty');
			expect(browser.getUrl()).to.equal(AddChildPage.url);
			});
			// it('should validate that user can change their password via Forgot password', function(){

			// });
			// it('should validate that the welcome email is received', function(){

			// });
			// it('should validate that the user can log in', function(){

			// });
			// it('should validate you can access Settings, Help and Feedback', function(){

			// });
			// it('should validate that the user can send feedback', function(){

			// });
			// it('should validate that the a child device can be paired with the account', function(){

			// });
			// it('should validate that child device can be blocked via manual block and profile displays correct status for child (blocked/granted & end time)', function(){

			// });
			// it('should validate that child device can be blocked via schedule and profile displays correct status for child (timezone and end time)', function(){

			// });
			// it('should validate the time zone feature functions correctly for Schedule Blocks', function(){

			// });
			// it('should validate that child can be granted while schedule blocked', function(){

			// });
			// it('should validate the alert appears on the badge and on the child's avatar and the parent app gets a notification if the child device becomes unmanaged', function(){

			// });
			// it('should validate the child device will re-enter a block state if re-paired', function(){

			// });
			// it('should validate that the user can edit child (including uploading photo)', function(){

			// });
			// it('should validate that you can edit settings (change email, change password, change name)', function(){

			// });
			// it('should validate you can delete a child', function(){

			// });
			// it('should validate you can log out', function(){
			// });
	});
});