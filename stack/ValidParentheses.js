function isValidParentheses(string) {
    const stack = [];
    const openingParathesis = ['(', '{', '['];
    const closingParathesis = [')', '}', ']'];
    for (let char of string) {
        if (openingParathesis.includes(char)) {
            stack.push(char);
        } else if (closingParathesis.includes(char)) {
            stack.pop();
        }
    }
    return stack.length === 0;
}


// Example usage:
const validString = "{()[]}";
const invalidString = ")[]{}(";

console.log(isValidParentheses(validString));   // Output: true
console.log(isValidParentheses(invalidString)); // Output: false