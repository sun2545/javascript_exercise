//using weakMap

//const wm = new WeakMap();
const obj ={};
function Area(height, width){
 obj.height = height;
  obj.width = width;
  
}
Area.prototype.getArea = function(){
  return obj.height * obj.width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());

//myarea = null;
//console.log(wm.has(myarea));