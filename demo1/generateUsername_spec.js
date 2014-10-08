describe("generateUsername", function() {
  it("When generating a username from valid input, should generate a username", function() {
  	//Arrange
  	//Act
  	var result = generateUsername("George", "Washington", "1234")
  	expect(result).toBe("gw1234")
  	//Assert
  })

  it("When generating a username, should generate a username in lowercase", function() {
  	//Arrange
  	//Act
  	var result = generateUsername("GEORGE", "WASHINGTON", "1234")
  	//Assert
  	expect(result).toBe("gw1234")
  })

  it("When generating a username with whitespace around everything, should trim out the whitespace", function() {
  	//Arrange
  	//Act
  	var result = generateUsername("   george   ", "    washington    ", "    1234      ")
  	//Assert
  	expect(result).toBe("gw1234")
  })

  it("When generating a username with an id that is fewer than 4 digits, should pad the extra space with zeroes", function() {
  	//Arrange
  	//Act
  	var result = generateUsername("George", "Washington", "1")
  	//Assert
  	expect(result).toBe("gw0001")
  })

  it("When generating a username with a missing first name, should error", function() {
  	//Arrange
  	//Act
  	
  	//Assert
  	expect(function() {
  	  generateUsername("", "Washington", "1234")
  	}).toThrow(new Error())
  })
  it("When generating a username with a first name that doesn't start with a letter, should error", function() {
    //Arrange
    //Act
    
    //Assert
    expect(function() {
      generateUsername("5eorge", "Washington", "1234")
    }).toThrow(new Error())
  })
  it("When generating a username with a missing last name, should error", function() {
    //Arrange
    //Act
    
    //Assert
    expect(function() {
      generateUsername("George", "", "1234")
    }).toThrow(new Error())
  })
  it("When generating a username with a lsat name that doesn't start with a letter, should error", function() {
    //Arrange
    //Act
    
    //Assert
    expect(function() {
      generateUsername("George", "\/\/ashington", "1234")
    }).toThrow(new Error())
  })
  it("When generating a username with a missing id, should error", function() {
    //Arrange
    //Act
    
    //Assert
    expect(function() {
      generateUsername("George", "Washington", "")
    }).toThrow(new Error())
  })
  it("When generating a username with a non-numeric id, should error", function() {
    //Arrange
    //Act
    
    //Assert
    expect(function() {
      generateUsername("George", "Washington", "first")
    }).toThrow(new Error())
  })
  it("When generating a username with an id that isn't a whole number, should error", function() {
    //Arrange
    //Act
    
    //Assert
    expect(function() {
      generateUsername("George", "Washington", "1.1")
    }).toThrow(new Error())
  })
  it("When generating a username with an id that is a negative number, should error", function() {
    //Arrange
    //Act
    
    //Assert
    expect(function() {
      generateUsername("George", "Washington", "-1")
    }).toThrow(new Error())
  })
})