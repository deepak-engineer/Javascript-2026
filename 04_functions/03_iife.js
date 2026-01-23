
//  Immediately invoked fucntion expression (IIFE)

(function chai() {
  // nemed iife

  console.log('db connected');
  
})();

(() => {
  console.log("db two connected");
  
})()