function theSame(...str) { //"кот"  ["о", 'к', "т"]  ["окт"]
  const arr = str.map(item => item.split("").sort().join(""));
  const b = arr[0]//"окт"
  return arr.some(item => item === b)
}

console.log(theSame("кот", "тк", "кто")); // true
