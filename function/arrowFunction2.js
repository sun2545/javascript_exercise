//this context of Arrow function

const myObj = {
  runTimeout() {
    setTimeout(function() {
      this.printData();
    }.bind(this),200);
  },
  printData(){
    console.log("hi");
  }
}

myObj.runTimeout();