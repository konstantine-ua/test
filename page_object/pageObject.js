"use strict";
// var LoginPage = require("./login.page.js");

class Page {

//HERE SHOULD BE DESCRIBED GLOBAL LOCATORS/FUNCTIONS which are valid for all pages of the application

//***	FOOTER	***//
	get privacyPolicy(){return browser.$('//a[@href="http://PROD_SITE/web-privacy-policy/"]');};
	get childrenPrivacyPolicy(){return browser.$('//a[@href="http://PROD_SITE/web-childrens-privacy-policy/"]');};
	get	termsAndConditions() {return browser.$('//a[@href="http://PROD_SITE/web-terms-and-conditions/"]');};

};


//Page.prototype.privacyPolicy = function(){return browser.$('//a[@href="http://PROD_SITE/web-privacy-policy/"]');} //WORKS AS method e.g. LoginPage.privacyPolicy().isVisible();



module.exports = new Page();


/*** WORKING CODE WHICH WAS TAKEN FROM THE TUTORIAL ***/
// function Page() {};

// Page.prototype.open = function(path) {
// 	browser.url('/' + path);
// };