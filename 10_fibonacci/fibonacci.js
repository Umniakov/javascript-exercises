const fibonacci = function(number) {
    let num = Number(number)
    if (num === 1 || num === 2) return 1;
    if (num > 2) {
      let x = 1;
      let y = 1;
      let temp = x;
      for (let i = 2; i < num; i++) {
        temp = x;
        x = x + y;
        y = temp;
      }
      return x;
    } else {
        return 'OOPS';
    }
  };

// Do not edit below this line
module.exports = fibonacci;
