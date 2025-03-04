# Section 4: Fundamentals of Node.js

## ***Node.js Modules***

### 1. Modules in Node.js: How They Work
Node.js modules allow us to break our application into reusable components. They can be built-in, third-party, or user-defined modules.
```javascript
const fs = require('fs');
console.log(fs);
```

### 2. Exploring the concept of modules with real-world examples
Modules help organize code logically. For example, a `math.js` module:
```javascript
module.exports.add = (a, b) => a + b;
```

### 3. How to export a Node.js module (file)
Use `module.exports`:
```javascript
module.exports = function() {
  console.log('Exported function');
};
```

### 4. How to require files in Node.js
Use `require()` to import modules:
```javascript
const math = require('./math');
console.log(math.add(2,3));
```

### 5. Why we need named and aggregate exports in Node.js
Named exports allow us to export multiple functions from one module:
```javascript
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

### 6. How to individually export and require multiple functions
We can destructure imported functions:
```javascript
const { add, subtract } = require('./math');
```

### 7. Exporting and requiring multiple functions at once
Using `module.exports`:
```javascript
module.exports = { add, subtract };
```

## ***Node.js Path Module***

### 1. What is the Path module in Node.js?
The `path` module provides utilities for working with file and directory paths.
```javascript
const path = require('path');
console.log(path.basename(__filename));
```

## ***Node.js OS Module***

### 1. Introduction to the OS module in Node.js
The `os` module provides operating system-related utility methods and properties.
```javascript
const os = require('os');
console.log(os.platform());
```

### 2. Creating an OS folder and file: Practical coding example
```javascript
const fs = require('fs');
fs.mkdirSync('OS_Folder');
fs.writeFileSync('OS_Folder/os_info.txt', os.type());
```

### 3. Exploring OS module methods and properties
```javascript
console.log(os.cpus());
console.log(os.totalmem());
```

## ***Node.js FS Module Synchronous CRUD Operations***

### 1. Creating a new file and adding data synchronously
```javascript
fs.writeFileSync('file.txt', 'Hello World');
```

### 2. Reading a file using the FS synchronous method
```javascript
console.log(fs.readFileSync('file.txt', 'utf8'));
```

### 3. Updating file data synchronously
```javascript
fs.appendFileSync('file.txt', ' - Updated!');
```

### 4. Deleting a file using the FS module
```javascript
fs.unlinkSync('file.txt');
```

## ***Node.js FS Module Asynchronously CRUD Operations***

### 1. Writing Data to a File Using FS Module (Async)
```javascript
fs.writeFile('file.txt', 'Hello Async', (err) => {});
```

### 2. Reading File Content Asynchronously
```javascript
fs.readFile('file.txt', 'utf8', (err, data) => console.log(data));
```

## ***Node.js FS Module Promises CRUD Operations***

### 1. Writing Data with FS Promises Module
```javascript
const fsPromises = require('fs').promises;
fsPromises.writeFile('file.txt', 'Using Promises');
```

## ***Node.js FS Module Async/Await CRUD Operations***

### 1. Writing Data in FS Module with Async/Await
```javascript
async function writeFile() {
    await fsPromises.writeFile('file.txt', 'Async/Await');
}
writeFile();
```

## ***Node.js Event Emitters***

### 1. What Is EventEmitter in Node.js?
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('event', () => console.log('Event Triggered!'));
emitter.emit('event');
```

## ***Node.js HTTP Module***

### 1. Creating a Server in Node.js
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000);
```

## ***Node.js package.json and Nodemon***

### 1. What is package.json?
```json
{
  "name": "my-app",
  "dependencies": { "express": "^4.0.0" }
}
```

### 2. Setting Up Nodemon for Auto Restarts
```bash
npm install -g nodemon
nodemon server.js
```

## ***Node.js ESModules***

### 1. Importing Default Exports Explained
```javascript
import myFunction from './module.js';
```

### 2. Named Export and Import
```javascript
export const greet = () => 'Hello!';
import { greet } from './module.js';
```

## ***NPM in Node.js***

### 1. Installing packages using NPM
```bash
npm install express
```

### 2. Using npm list
```bash
npm list
```

### 3. Using npm view
```bash
npm view express
```

---
This README.md file provides a structured overview of Node.js modules, the file system, HTTP servers, event emitters, ESModules, and NPM. Let me know if you need more details or modifications! 🚀

