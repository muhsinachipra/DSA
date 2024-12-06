function isValidParentheses(string) {
    const stack = [];
    const matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of string) {
        if (char === '(' || char === '{' || char === '[') {
            // Push opening brackets onto the stack
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // Check if the stack is empty or the top of the stack doesn't match the corresponding opening bracket
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("()"));        // true
console.log(isValidParentheses("()[]{}"));    // true
console.log(isValidParentheses("(]"));        // false
console.log(isValidParentheses("([)]"));      // false
console.log(isValidParentheses("{[]}"));      // true
