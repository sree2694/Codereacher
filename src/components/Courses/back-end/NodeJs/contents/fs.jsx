import React, { useState } from "react";
import "../css/fs.css";

const FileSystemModule = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "fs",
      q2: "Streams are used for reading or writing large files efficiently.",
      q3: "fs.readdir",
    };

    const userAnswers = Array.from(e.target.elements)
      .filter((el) => el.checked)
      .reduce((acc, el) => ({ ...acc, [el.name]: el.value }), {});

    const score = Object.keys(correctAnswers).reduce(
      (sum, key) => sum + (userAnswers[key] === correctAnswers[key] ? 1 : 0),
      0
    );

    setQuizResult(`You got ${score} out of ${Object.keys(correctAnswers).length} correct.`);
  };

  return (
    <div className="fs-container">
      <h1> File System (fs) Module</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>fs</strong> module in Node.js provides an API to interact with the file system. It allows you to perform operations such as reading, writing, and manipulating files and directories.
        </p>
      </section>

      <section>
        <h2>Reading and Writing Files</h2>
        <p>
          You can use methods like <code>fs.readFile</code> and <code>fs.writeFile</code> to read from and write to files.
        </p>
        <p>Example: Reading a file</p>
        <pre>
          <code>{`
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
          `}</code>
        </pre>
        <p>Example: Writing to a file</p>
        <pre>
          <code>{`
fs.writeFile('output.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been written');
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Working with Directories</h2>
        <p>
          The <strong>fs</strong> module provides methods for creating, deleting, and listing directories.
        </p>
        <p>Example: Creating and deleting a directory</p>
        <pre>
          <code>{`
fs.mkdir('newDir', (err) => {
  if (err) throw err;
  console.log('Directory created');

  fs.rmdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory removed');
  });
});
          `}</code>
        </pre>
        <p>Example: Listing directory contents</p>
        <pre>
          <code>{`
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Files in directory:', files);
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Handling File Streams</h2>
        <p>
          File streams are used for reading or writing large files efficiently by breaking the process into chunks. The <code>fs.createReadStream</code> and <code>fs.createWriteStream</code> methods are commonly used.
        </p>
        <p>Example: Reading a file using streams</p>
        <pre>
          <code>{`
const readStream = fs.createReadStream('largeFile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('New chunk received:', chunk);
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which Node.js module is used to work with files and directories?</p>
            <label>
              <input type="radio" name="q1" value="fs" /> fs
            </label>
            <label>
              <input type="radio" name="q1" value="http" /> http
            </label>
            <label>
              <input type="radio" name="q1" value="path" /> path
            </label>
          </div>
          <div>
            <p>2. What is the purpose of streams in the fs module?</p>
            <label>
              <input type="radio" name="q2" value="Streams are used for reading or writing large files efficiently." />
              Streams are used for reading or writing large files efficiently.
            </label>
            <label>
              <input type="radio" name="q2" value="To execute multiple HTTP requests simultaneously." />
              To execute multiple HTTP requests simultaneously.
            </label>
          </div>
          <div>
            <p>3. Which method is used to list all files in a directory?</p>
            <label>
              <input type="radio" name="q3" value="fs.readdir" /> fs.readdir
            </label>
            <label>
              <input type="radio" name="q3" value="fs.readFile" /> fs.readFile
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {quizResult && <p className="quiz-result">{quizResult}</p>}
      </section>

      <section>
        <h2>References</h2>
        <ul>
          <li>
            <a href="https://nodejs.org/api/fs.html" target="_blank" rel="noopener noreferrer">
              Node.js File System Documentation
            </a>
          </li>
          <li>
            <a href="https://www.digitalocean.com/community/tutorials/nodejs-fs-module" target="_blank" rel="noopener noreferrer">
              DigitalOcean: Working with the File System in Node.js
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FileSystemModule;
