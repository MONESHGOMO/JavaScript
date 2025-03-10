***JavaScript Execution Context***

-  Everything in JavaScript happens inside an Execution Context (container).  

   Execution Context is a Big Box:  
- It consists of a **key-value pair** structure.  
- **Memory Component (Variable Environment):**  
  - Stores variables and functions as **key-value pairs**.  
  - Example:  
    ```js
    a: 10 // a is a key : and 10 is  the  value
    ```  
- **Thread of Execution (Code Component):**  
  - The place where the actual code executes at runtime.  
 - JavaScript is a Synchronous and Single-threaded Language  
- **Synchronous and Single-threaded:**  
  - Executes one command at a time in a specific order.  
  - The next line of execution starts **only** after the current line is complete.  
- **AJAX → Asynchronous (Upcoming Concept).**
- [Resource](https://youtu.be/ZvbzSrg0afE?si=w9cuMXh83k7_JdAG)

***
 
 ***Session : 2***

 **Question: What happens when we run JavaScript code?**  
**Ans:** An execution context is created.  


**Understanding Code Execution in JavaScript**  

**Example Code:**  
```js
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
```
- Global Execution Context (GEC) Creation

- The execution context is created in two phases:

- Memory Creation Phase
- Code Execution Phase
- Code Flow

Memory Creation Phase (First Phase)
JavaScript allocates memory for variables and functions:

- n → Initially assigned undefined.
- square → Stores the entire function definition.
- square2, square4 → Initially assigned undefined.
- **Key Differences:**

``` text
null → No value is stored (nothing assigned).  
undefined → A special value assigned during variable initialization.  
```

**Code Execution Phase (Second Phase)**  
- `n` is assigned `2` instead of `undefined`.  
- Function definition is skipped; no execution happens yet.  
- **Function Invocation (`square(n)`)** → A **new Execution Context** is created.  



**Function Execution Context (FEC)**  
Every function call creates a new execution context with two phases:  

### Memory Creation Phase  
- `num` → `undefined`  
- `ans` → `undefined`  

### Code Execution Phase  
- `num` gets assigned the actual argument value (`2`).  
- `ans = num * num` → Value computed and stored.  
- `return ans` → The function returns the result to the **Global Execution Context (GEC)**.  
- **Function Execution Context is deleted** after execution.  


**Function Execution Process**  
1. `square(n)` creates an execution context, processes logic, returns data, and gets deleted.  
2. `square(4)` creates another execution context, computes value, returns data, and gets deleted.  
3. The returned values are assigned to `square2` and `square4` in **GEC**.  

**Note:** Every function execution creates a temporary execution context that is **automatically deleted** after completion.  

 [Resource](https://youtu.be/iLWTnMzWtj4?si=1PKQSr7C9WC8Qsza)

 ***
