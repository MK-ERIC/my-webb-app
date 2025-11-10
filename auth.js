// auth.js - Simple example of user authentication
const users = [
  { username: "admin", password: "admin123" },
  { username: "user1", password: "pass123" },
];

function authenticate(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    return "Authentication successful!";
  } else {
    return "Invalid username or password.";
  }
}

// Test locally
console.log(authenticate("admin", "admin123")); // Should print: Authentication successful!
console.log(authenticate("user1", "wrongpass")); // Should print: Invalid username or password.

module.exports = { authenticate };
