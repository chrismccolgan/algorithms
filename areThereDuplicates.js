// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// arguments isn't available in arrow functions

const areThereDuplicates = (...args) => {
  return new Set(args).size !== args.length;
};

console.log(areThereDuplicates(1, 2, 3, 4, 5));
