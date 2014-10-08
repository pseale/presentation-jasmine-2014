var webdriver = require('selenium-webdriver')

var driver = new webdriver.Builder().
  withCapabilities(webdriver.Capabilities.firefox()).
  build()

function fillOutFormAndExpect(firstName, lastName, id, expectedUsername, done) {
  //Arrange
  driver.get("file:///Users/p/s/jasmine-talk-2014-2/demo2/baked/generate-username.html").
    then(function() { return driver.findElement(webdriver.By.id('first-name')) }).
    then(function(e) { return e.sendKeys(firstName) }).
    then(function() { return driver.findElement(webdriver.By.id('last-name')) }).
    then(function(e) { return e.sendKeys(lastName) }).
    then(function() { return driver.findElement(webdriver.By.id('id-field')) }).
    then(function(e) { return e.sendKeys(id) }).
    then(function() { return driver.findElement(webdriver.By.css('button')) }).

    //Act
    then(function(e) { return e.click() }).

    //Assert
    then(function() { return driver.findElement(webdriver.By.id('username')) }).
    then(function(e) { return e.getAttribute('value') }).
    then(function(text) { expect(text).toEqual(expectedUsername); done(); })
}

describe("Generating a username", function() {
  describe("Given valid name and id", function() {
    it("generates a username with the first letter of the first name, first letter of the last name, and a four-digit ID", function(done) {
      fillOutFormAndExpect("george", "washington", 1, "gw0001", done)
    })
  })
  describe("Given UPPERCASE names", function() {
    it("converts uppercase letters to lowercase", function(done) {
      fillOutFormAndExpect("GEORGE", "WASHINGTON", 1, "gw0001", done)
    })
  })

  describe("Given garbage data", function() {
    describe("Given a missing first name", function() {
      it("fails to generate a username", function(done) {
        fillOutFormAndExpect("", "Washington", 1, "", done)
      })
    })

    describe("Given a missing last name", function() {
      it("fails to generate a username", function(done) {
        fillOutFormAndExpect("George", "", 1, "", done)
      })
    })

    describe("Given a missing ID", function() {
      it("fails to generate a username", function(done) {
        fillOutFormAndExpect("George", "Washington", "", "", done)
      })
    })

    describe("Given a non-positive-integer ID", function() {
      it("fails to generate a username", function(done) {
        fillOutFormAndExpect("George", "Washington", "numero uno", "", done)
      })
    })

    describe("Given fields filled in only with whitespace", function() {
      it("fails to generate a username", function(done) {
        fillOutFormAndExpect("    ", "  ", "     ", "", done)
      })
    })
  })
})