//Product of all positive integers less than or equal to a given number

function factorialize(num) {
  var factor = 1;
  for (i = 1; i <= num; i++){
    factor *= i;
  }
  return factor;
}

factorialize(5);