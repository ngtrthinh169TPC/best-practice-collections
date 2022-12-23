// Brief function to deep copy a variable without structuredClone for Node <17

function deepCopy(obj) {
  return Object.keys(obj).reduce(
    (v, d) =>
      Object.assign(v, {
        [d]: obj[d].constructor === Object ? deepCopy(obj[d]) : obj[d],
      }),
    {}
  );
}

const objectA = {
  hello: "world",
  foo: () => {
    return "bar";
  },
};

const deepCopied = deepCopy(objectA);

console.log(objectA === deepCopied); // deepCopied is a new object => false
console.log(objectA.hello === deepCopied.hello); // value of attribute is the same => true
console.log(objectA.foo === deepCopied.foo); // functions are also copied => true
