const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map((item)=>{
  let sqrX = item['x'] = (Math.pow(item['x'], 2));
  let sqrY = item['y'] = (Math.pow(item['y'], 2));
  item = Math.sqrt(sqrX + sqrY);
  return item;
});
  
// -------- TEST CASES ------------
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);