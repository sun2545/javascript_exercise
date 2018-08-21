//this context of Arrow function

const myObj = {
  runTimeout() {
    setTimeout(function() {
      console.log(this===window);
    },200);
  }
}

myObj.runTimeout();