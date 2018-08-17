const data = [
  {
    name:'coffee-bean',
    order :true,
    item :['americano', 'milk', 'green-tea']
  },
  {
    name:'starbucks',
    order:false,
  },
  {
    name:'coffee-king',
    order :true,
    item :['americano', 'latte']
  }
]

//Tagged template literals
function fn(tags, name, items){
  if(typeof items ==="undefined"){
    items ="out of stock";
  }
  return (tags[0] + name + tags[1] + items + tags[2]);
}
data.forEach((v) =>{
  

let template = fn`<div> welcome ${v.name}!! </div>
      <h2>list</h2><div>${v.items}</div>`;
console.log(template);
});