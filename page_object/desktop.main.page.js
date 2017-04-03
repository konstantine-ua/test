var Page = require('./pageObject.js');

var DesktopMain = Object.create(Page, {

url: {get: function(){return 'https://QA_SITE/';}},
logo: {get: function(){return $("//op-home-logo/div/a");}},
manageButton: {get: function(){return $("")}},
devicesButton: {get: function(){return $("((//div[@class=('menu-items')])[1]//a[@class='menu-link'])[1]")}},
addChildButton: {get: function(){return $("((//div[@class=('menu-items')])[1]//a[@class='menu-link'])[2]"))}},
notificationsButton: {get: function(){return $("//button[@class=('nav-icon-select')]/div[@class=('notifications-button')]")}},
accountButton: {get: function(){return $("//div[@class=('nav-item smaller user-menu-item')]/button[@class=('nav-icon-select')]")}}

});

module.exports = DesktopMain;
