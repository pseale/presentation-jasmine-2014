describe("Synchronous specs run and finish", function() {
  it("terminates when this spec finishes", function() { //no "done" argument

    expect("we expect that code executes from top to bottom").toBeTruthy()
    expect("just like 'the good old days'").toBeTruthy()

  })
})

describe("Asynchronous specs wait for done to be called", function() {
  it("will terminate this spec when done() is called", function(done) { //"done" argument 

    expect("this expectation will run").toBeTruthy()
    done()
    expect("this expectation should never run?").toBeTruthy()
    setTimeout(function() { 
      expect("ok THIS will never run").toBeFalsy()
    }, 2000)

  })
})











