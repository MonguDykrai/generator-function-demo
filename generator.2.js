const fetch = require("node-fetch");

function* gen() {
  try {
    // debugger;
    const todos = yield getTodos();
    console.log(todos);
    console.log(2);
    console.log(beauty);
  } catch (error) {
    console.log(error);
  }
}

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => {
      g.next(json);
    });
}

const g = gen();
console.log(g.next());
