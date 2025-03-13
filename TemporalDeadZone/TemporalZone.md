# Hoisting and Temporal Dead Zone (TDZ) in JavaScript

## Hoisting Table

| Type                        | Hoisted?  | Value Before Initialization |
|-----------------------------|-----------|--------------------------------|
| `var`                      | ✅ Yes    | `undefined`                  |
| `let`                      | ❌ No    | ❌ ReferenceError             |
| `const`                    | ❌ No    | ❌ ReferenceError             |
| Function Declaration        | ✅ Yes    | Can be used before declaration |
| Function Expression (`var`, `let`, `const`) | ❌ No | ❌ ReferenceError |

## What is Hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved (hoisted) to the top of their containing scope before code execution. However, only the **declaration** is hoisted, not the initialization.

### Function Hoisting Example
```js
// Works because function declarations are fully hoisted
greet();
function greet() {
    console.log("Hello, World!");
}
```
**Output:** `Hello, World!`

### Variable Hoisting Example
```js
console.log(a); // ✅ Output: undefined (because `var` is hoisted)
var a = 10;
```
```js
console.log(b); // ❌ ReferenceError (because `let` is in TDZ)
let b = 20;
```

## Understanding Temporal Dead Zone (TDZ)
The **Temporal Dead Zone (TDZ)** is the period between when a variable is **hoisted** and when it is **initialized**.

### Example:
```js
console.log(a); // ✅ Output: 10 (no error)
let a = 10;
console.log(b); // ❌ ReferenceError (due to TDZ)
let b = 330;
```

## `var` vs `let` vs `const`

### Redeclaration Behavior:
```js
var c = 10;
var c = 20; // ✅ No error (redeclaring `var` is allowed)

// let d = 10;
// let d = 20; // ❌ SyntaxError: Identifier 'd' has already been declared
```

### `const` Behavior (Similar to `final` in Java)
```js
const e = 10;
e = 11; // ❌ TypeError: Assignment to a constant variable

// const f;
// f = 10;  // ❌ SyntaxError: Missing initializer in const declaration
```

## Error Types Explained
Understanding these errors can help prevent issues in JavaScript:

### **1. TypeError** (Assignment to `const` variable)
Occurs when trying to change a constant variable.
```js
const a = 10;
a = 11; // ❌ TypeError: Assignment to a constant variable
```

### **2. SyntaxError** (Incorrect `const` or `let` declaration)
Occurs when a variable is declared incorrectly.
```js
// const a;
// a = 10; // ❌ SyntaxError: Missing initializer
```
```js
// let a = 10;
// let a = 11; // ❌ SyntaxError: Identifier 'a' has already been declared
```

### **3. ReferenceError** (TDZ Violation)
Occurs when accessing a `let` or `const` variable before declaration.
```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 330;
```

## Best Practices to Avoid TDZ
✅ Always declare and initialize variables **at the top** of the scope.
```js
let a = 10;
const b = 20;
console.log(a, b);
```
✅ Use `const` by default for variables that won't change.
✅ Avoid `var` as it can lead to unexpected behavior.

## **When to Use?**
1. **`const`** → Use by default (immutable values).
2. **`let`** → Use when variable needs to change.
3. **`var`** → **Not recommended** (due to hoisting and global scope issues).

## Summary
- **Hoisting** moves variable and function declarations to the top of the scope.
- **TDZ** occurs when accessing `let` or `const` before initialization.
- **Use `let` and `const` instead of `var`** to avoid hoisting issues.
- **Declare variables at the beginning of the scope** to prevent TDZ errors.

