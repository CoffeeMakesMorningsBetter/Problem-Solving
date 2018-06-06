/* Partial application refers to the process of taking a function and returning a new function until all parameters to that function have been passed. The function that is partially applied, eventually resolves with a value once all parameters have been passed to it. */

function partial(fn) {
  const args = [];

  function inner(...innerArgs) {
    args.push(...innerArgs);

    if (args.length >= fn.length) return fn(...args);
    else return inner;
  }
  return inner;
}

function addAlot(a, b, c, d, e, f, g, h) {
  return a + b + c + d + e + f + g + h;
}

var partialAdd = partial(addAlot);
partialAdd()(1, 2)(3, 4)(5, 6)()()()()(6)()()(10, 11, 12); // 37

function subtractAlot(a, b, c, d, e) {
  return a - b - c - d - e;
}

var partialSub = partial(subtractAlot);
partialSub(1, 2, 3)(4, 5, 6); // -13
