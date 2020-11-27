function zero(func) {
  if (func === undefined) {
    return 0;
  } else {
    return func(0);
  }
}
function one(func) {
  if (func === undefined) {
    return 1;
  } else {
    return func(1);
  }
}
function two(func) {
  if (func === undefined) {
    return 2;
  } else {
    return func(2);
  }
}
function three(func) {
  if (func === undefined) {
    return 3;
  } else {
    return func(3);
  }
}
function four(func) {
    if (func === undefined) {
    return 4;
  } else {
    return func(4);
  }
}
function five(func) {
    if (func === undefined) {
    return 5;
  } else {
    return func(5);
  }
}
function six(func) {
    if (func === undefined) {
    return 6;
  } else {
    return func(6);
  }
}
function seven(func) {
    if (func === undefined) {
    return 7;
  } else {
    return func(7);
  }
}
function eight(func) {
    if (func === undefined) {
    return 8;
  } else {
    return func(8);
  }
}
function nine(func) {
    if (func === undefined) {
    return 9;
  } else {
    return func(9);
  }
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