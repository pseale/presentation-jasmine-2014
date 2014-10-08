//discuss problem (again)

//"we're going to solve this with selenium"

//load node console and paste
var webdriver = require('selenium-webdriver')

var driver = new webdriver.Builder().
  withCapabilities(webdriver.Capabilities.firefox()).
  build()


//after explaining, load a page
driver.get('file:///Users/p/s/jasmine-talk-2014-2/demo2/generate-username.html')


//after explaining, show how it works with elements on the page
driver.findElement(webdriver.By.id('first-name')).then(function(a) { return a.sendKeys('George'); })


//show how it is raw and unpolished
driver.findElement(webdriver.By.id('first-name')).then(function(a) { return a.getValue(); }).then(function(b) { console.log("textbox is: " + b); })

driver.findElement(webdriver.By.id('first-name')).then(function(a) { return a.getAttribute('value'); }).then(function(b) { console.log("textbox is: " + b); })

//let's finish filling out the form
driver.findElement(webdriver.By.id('last-name')).then(function(a) { return a.sendKeys('Washington'); })
driver.findElement(webdriver.By.id('id-field')).then(function(a) { return a.sendKeys('0001'); })

//click
driver.findElement(webdriver.By.css('button')).then(function(a) { a.click(); })

//examine result
driver.findElement(webdriver.By.id('username')).then(function(a) { return a.getAttribute('value'); }).then(function(b) { console.log("username textbox: " + b); })

//switch to 1_webdriver_introduction_spec.js

//"let that soak in for a moment. Beautiful"

//note there are 3 things to discuss: webdriver, promises, and done

//switch to 2_introducing_async_spec.js - mess with it

//run it with jasmine-node
jasmine-node 2_introducing_async_spec.js


//switch to generating_a_username_spec.js & write first spec - crib webdriver code from 1_webd

//emphasize we follow same rules

//make the test "pass"

//add second spec

//make the test "pass"

//copy in rest of tests

//copy in "solution"

//run final test suite