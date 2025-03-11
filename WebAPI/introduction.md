# Types of Web API in JavaScript

## 1. Timers API:
Timers allow us to delay or repeat the execution of code.

### `setTimeout()`:
Executes a function after a specified delay.
```javascript
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);
```
**Explanation:** This code waits for 3 seconds (3000 milliseconds) before executing the function.

### `setInterval()`:
Repeats a function execution at fixed intervals.
```javascript
setInterval(() => {
    console.log("This message appears every 2 seconds");
}, 2000);
```
**Explanation:** This runs the function repeatedly every 2 seconds.

## 2. DOM API:
The DOM (Document Object Model) allows JavaScript to manipulate web pages.

### Example:
```javascript
const heading = document.getElementById("title");
heading.textContent = "Updated Heading";
```
**Explanation:** This selects an element with the ID `title` and updates its text content.

## 3. Fetch API:
Used to make HTTP requests and fetch resources.

### Example:
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```
**Explanation:** This fetches data from an API and logs the response in JSON format.

## 4. Local Storage API:
Stores data persistently in the browser.

### Example:
```javascript
localStorage.setItem("username", "Gomo");
console.log(localStorage.getItem("username"));
```
**Explanation:** Saves the username "Gomo" in local storage and retrieves it.

## 5. Console API:
Provides debugging tools.

### Example:
```javascript
console.log("Normal log message");
console.warn("Warning message");
console.error("Error message");
```
**Explanation:** Logs different types of messages in the developer console.

## 6. Location API:
Provides information about the current URL and allows navigation.

### Example:
```javascript
console.log(window.location.href); // Logs the current URL
window.location.href = "https://www.example.com"; // Redirects to another page
```
**Explanation:** Displays the current page URL and redirects to a new page.

---
## JavaScript is Single-Threaded
JavaScript uses a single-threaded event loop and does not wait for operations to complete before moving to the next task.

### Call Stack Example:
```javascript
function first() {
    console.log("First function");
}
function second() {
    console.log("Second function");
}
first();
second();
```
**Explanation:** The call stack executes `first()` and then `second()` sequentially without waiting.

### Async Example:
```javascript
console.log("Start");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);
console.log("End");
```
**Explanation:** "Start" and "End" are logged first, and after 2 seconds, "Inside setTimeout" is printed.

---
## Window Object
All Web APIs are part of the `window` object, acting as a global instance that provides access to these APIs.

### Example:
```javascript
console.log(window.document); // Accesses the DOM
console.log(window.localStorage); // Accesses Local Storage
console.log(window.location.href); // Gets the current URL
```

---
### Further Reading:
[Mastering Async JavaScript - Event Loop, Microtasks, and Macrotasks](https://dev.to/jslovers/mastering-async-js-demystifying-the-event-loop-microtasks-macrotasks-1ha)

