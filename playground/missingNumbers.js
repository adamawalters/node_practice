function missingNumberSum(numbers) {
    const n = numbers.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return expectedSum - actualSum;
  }

  

console.log(missingNumberSum([1, 4, 3, 5]))