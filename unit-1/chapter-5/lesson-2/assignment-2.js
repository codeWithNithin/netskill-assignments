// write a while loop, which iterates from 2 to 500 and prints all the prime numbers in it.

let i = 2,
  n = 500
// run a loop from 2 to n - 1
while (i <= n) {
  // if the number is divisible by i, then n is not a prime number.
  if (isPrime(i)) console.log(i)
  i++
}

function isPrime(n) {
  // since 0 and 1 is not prime return false.
  if (n == 1 || n == 0) return false

  // Run a loop from 2 to n-1
  for (var i = 2; i < n; i++) {
    // if the number is divisible by i, then n is not a prime number.
    if (n % i == 0) return false
  }
  // otherwise, n is prime number.
  return true
}
