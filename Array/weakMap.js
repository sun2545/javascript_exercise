//using weakMap

const wm = new WeakMap();
function Area(height, width){
 wm.set(this, {height, width});
  
}
Area.prototype.getArea = function(){
  const {height, width} =wm.get(this);
  return this.height * this.width;
}

let myarea = new Area(10,20);
console.log(wm.get(myarea));

myarea = null;
console.log(wm.has(myarea));