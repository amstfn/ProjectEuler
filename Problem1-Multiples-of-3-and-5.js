function sum(a, b) {//take two number and return their sum
    let result = 0
    return result = a + b;
  }
  function checker(n) {//check if the input number is multiples of 3 or 5
    if (n % 5 == 0 || n % 3 == 0) {
      return true;
    }
  }
  
  function multiplesOf3and5(number) {//return the sum of all the multiples of 3 or 5 below the provided parameter value number.
    let result = 0;
    for (let i = 0; i < number; i++) {
      if (checker(i)) {
        result = sum(result, i)
      }
    }
    return result;
  }
  
  multiplesOf3and5(1000);