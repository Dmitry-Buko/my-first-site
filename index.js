const obj = [
  { name: "Pasha", age: 25 },
  { name: "Sasha", age: 30 },
  { name: "Masha", age: 27 },
];

const json = JSON.stringify(obj);
const func = (json) => {
  const parse = JSON.parse(json);

  return parse.reduce((acc, item) => {
    acc.push(Object.values(item));
    return acc;
  }, []);
};

console.log(func(json));
