//introduce problem - generating username

//getUsername.js
function getUsername(firstName, lastName, id) {
  return "username0001";  
}

//getUsername_spec.js
describe("generateUsername()", function() {
  it("Given a valid first name, last name, and four-digit ID, it should generate a valid username", function() {
    //Arrange
    //Act
    //Assert
    expect(true).toBeTruthy()
  })
})

//load demo1 - file:///Users/p/s/jasmine-talk-2014-2/demo1/SpecRunner.html

//fill out first test - write expect as .toBeTruthy() - change to shouldEqual() - then TALK ABOUT WHY

//add a second test for padding