// Importing Express.js (Similar to importing Spring Boot's @RestController in Java)
const express = require('express');

// Creating an instance of an Express application (Equivalent to creating a Spring Boot Application class)
const app = express();

// Defining the server port (Similar to setting up a port in application.properties in Spring Boot)
const PORT = 3000;

// Middleware to parse JSON request bodies (Similar to @RequestBody in Spring Boot)
app.use(express.json());

// Dummy data (acting as a database)
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

// GET Request (Fetching all users) - Similar to @GetMapping in Spring Boot
app.get('/users', (req, res) => {
    res.json(users);
});

// GET Request (Fetching a single user by ID) - Similar to @GetMapping("/{id}") in Spring Boot
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// POST Request (Creating a new user) - Similar to @PostMapping in Spring Boot
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT Request (Updating an existing user) - Similar to @PutMapping("/{id}") in Spring Boot
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE Request (Deleting a user) - Similar to @DeleteMapping("/{id}") in Spring Boot
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    users.splice(userIndex, 1);
    res.send('User deleted successfully');
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
