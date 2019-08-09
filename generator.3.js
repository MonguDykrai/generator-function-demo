const fetch = require("node-fetch");

function* gen() {
  try {
    yield getTodos();
    console.log(2);
  } catch (error) {
    console.log(error);
  }
}

function getTodos() {
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then(response => response.json())
  //   .then(json => json);

  return "abc";
}

const g = gen();
console.log(g.next());
