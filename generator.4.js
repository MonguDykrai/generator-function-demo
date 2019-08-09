const fetch = require("node-fetch");
let generator = null;

function* gen() {
  try {
    const todo1 = yield getTodos(`https://jsonplaceholder.typicode.com/todos`);

    console.log(todo1);

    const todo2 = yield getTodos(
      `https://jsonplaceholder.typicode.com/todos/66`
    );

    setTimeout(() => {
      console.log(todo2);
    }, 5000);
  } catch (error) {
    console.log(error);
  }
}

function getTodos(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      generator.next(json);
    })
    .catch(error => {
      generator.next(error);
    });
}

generator = gen();
generator.next();
