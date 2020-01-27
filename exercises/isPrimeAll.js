function isPrimeAll(n) {
//    if (n === 2) {
//      return true
//   }
//    if (n % 2 === 0) {
//      return false
//   }
//    for (let d = 3; d < n; d += 2) {
//      if (n % d === 0) {
//        return false;
//      }
//    }
//  
//    return true;
  if (n < 2){
    return false 
  }
  for (let d = 2; d <= Math.sqrt(n); d++) {
        if (n % d == 0) {
          return false;
        }
      }
  return true
}

  console.log(isPrimeAll(4) === false)
  console.log(isPrimeAll(17) === true)
  console.log(isPrimeAll(100000007) === true) 
  console.log(isPrimeAll(1000000007) === true) 
  console.log(isPrimeAll(100000000003) === true) 
