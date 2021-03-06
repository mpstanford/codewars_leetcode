function zero(func) {
  return func ? func(0) : 0;

  // this is the same as:
  // if (func === undefined) {
  //   return 0;
  // } else {
  //   return func(0);
  // }
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(secondValue) {
  return function (firstValue) {
    return firstValue + secondValue;
  }
}
function minus(secondValue) {
  return function (firstValue) {
    return firstValue - secondValue;
  }
}
function times(secondValue) {
  return function (firstValue) {
    return firstValue * secondValue;
  }
}
function dividedBy(secondValue) {
  return function (firstValue) {
    return Math.floor(firstValue/secondValue);
  }
}