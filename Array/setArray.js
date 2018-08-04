let mySet = new Set();
//console.log(toString.call(mySet));

//set : for unique value, can check exist.

mySet.add("crong");
mySet.add("hary");
mySet.add("baby");
mySet.add("crong");

mySet.delete("baby");

console.log(mySet.has("crong"));

mySet.forEach(function(v){
  console.log(v);
})
