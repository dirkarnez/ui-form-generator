let obj = {
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main Street",
    "city": "New York",
    "state": "NY"
  },
  "pets": [
    {"name": "Fluffy", "type": "cat"},
    {"name": "Fido", "type": "dog"}
  ]
};

depthFirstTraversalIterative(obj);

function depthFirstTraversalIterative(obj) {
  let stack = [obj];
  while(stack.length > 0) {
    let current = stack.pop();
    console.log(current);
    if (typeof current === 'object') {
      for (let key in current) {
        stack.push(current[key]);
      }
    }
  }
}
