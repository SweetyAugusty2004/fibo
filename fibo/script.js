function generateFibonacci(n) {
    let fib = [0, 1]; // Initialize array with first two Fibonacci numbers
  
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }
  
  // Display Fibonacci series in the HTML
  document.addEventListener('DOMContentLoaded', function() {
    const fibonacciNumbers = document.getElementById('fibonacciNumbers');
    const n = 10; // Number of Fibonacci numbers to generate
    const fibonacciSeries = generateFibonacci(n);
    
    fibonacciNumbers.textContent = fibonacciSeries.join(', ');
  });