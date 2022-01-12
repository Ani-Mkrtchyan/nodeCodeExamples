/**  setImmediate(function A() {
    console.log(1);
    setImmediate(function B() {
      console.log(2);
      setImmediate(function D() { 
        console.log(3);
      });
    });
  
    setImmediate(function C() {
      console.log(4);
      setImmediate(function E() { 
        console.log(5);
      });
    });
});
 console.log('Started...'); */




// ------------------------------------------
// executed after every 1000 milliseconds

/**  setInterval(() => {
    return console.log('Hello World!');
}, 1000);

console.log('Executed ....'); */


// ------------------------------------------
// executed after 3000 milliseconds 

// setTimeout(() => {
//     return console.log('Hello World!');
// }, 3000);
// console.log('Executed ....');


// ------------------------------

/**  const example = setImmediate(() => {
    console.log(1);
});
  
// clears setInterval 
clearImmediate(example);
  
 console.log(2); */


// -------------------------
/**  const example = setInterval(() => {
    return console.log("Hello World!");
}, 500);
  
setTimeout(() => {
    clearInterval(example);
}, 2000); */

// ----------------------------------


const timer1 = setTimeout(() => {
    return console.log("Hello World!");
}, 3000);
  

const timer2 = setTimeout(() => {
    return console.log("Hello");
}, 3000);
  
clearTimeout(timer1);