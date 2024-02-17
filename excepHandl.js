function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }

        return a / b;
    } catch (error) {
        // Handle the exception
        console.error('Error:', error.message);
        return null; // Or any value that makes sense for your application
    } finally {
        console.log('Finally block always executes');
    }
}

// Example usage:
console.log(divideNumbers(10, 2));  // Output: 5
console.log(divideNumbers(8, 0));   // Output: Error: Division by zero is not allowed
console.log(divideNumbers(15, 3));  // Output: 5
