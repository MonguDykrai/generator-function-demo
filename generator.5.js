function* gen() {
  yield 1 + 2;
  yield 2 + 3;
}

const generator = gen();
// console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// function fn() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// }

// fn();
