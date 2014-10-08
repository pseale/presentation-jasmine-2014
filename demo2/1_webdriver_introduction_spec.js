var webdriver = require('selenium-webdriver')

var driver = new webdriver.Builder().
  withCapabilities(webdriver.Capabilities.firefox()).
  build()

describe("Introducing selenium and async jasmine specs", function() {
	it("notice the function(done)", function(done) {
		driver.get("file:///Users/p/s/jasmine-talk-2014-2/demo2/baked/generate-username.html").
      then(function() { return driver.findElement(webdriver.By.id('first-name')) }).
      then(function(e) { return e.sendKeys('George') }).
      then(function() { return driver.findElement(webdriver.By.id('last-name')) }).
      then(function(e) { return e.sendKeys('Washington') }).
      then(function() { return driver.findElement(webdriver.By.id('id-field')) }).
      then(function(e) { return e.sendKeys('1') }).
      then(function() { return driver.findElement(webdriver.By.css('button')) }).
      then(function(e) { return e.click() }).
      then(function() { return driver.findElement(webdriver.By.id('username')) }).
      then(function(e) { return e.getAttribute('value') }).
      then(function(text) { expect(text).toEqual("gw0001"); done(); })
	})
})





