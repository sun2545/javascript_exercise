//arrow function
/* callback function

setTimeout(()=>{
   console.log("settimeout");
 },1000);
 
*/ 

/* 
  let newArr =[1,2,3,4,5].map((v) => {
  return v *2;
});

*/
// different way but the same result
let newArr = [1,2,3,4,5].map( (v) => (v*2));

console.log("arrow newArr", newArr);