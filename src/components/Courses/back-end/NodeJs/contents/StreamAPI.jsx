import React, { useState } from "react";
import "../css/StreamAPI.css";

const StreamAPI = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Efficiently handle large amounts of data in chunks.",
      q2: "fs.createReadStream",
      q3: "stream.pipe",
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
    <div className="streamapi-container">
      <h1>Stream API</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Stream API</strong> in Node.js allows you to process large amounts of data efficiently by breaking the data into chunks and processing them incrementally.
        </p>
        <p>
          Streams are used to handle data that is too large to fit in memory, such as reading a large file, processing incoming HTTP requests, or working with live data feeds.
        </p>
      </section>

      <section>
        <h2>Readable and Writable Streams</h2>
        <p>
          Streams in Node.js are instances of the <code>stream</code> module, which provides four main types:
        </p>
        <ul>
          <li>
            <strong>Readable Streams:</strong> For reading data (e.g., <code>fs.createReadStream</code>).
          </li>
          <li>
            <strong>Writable Streams:</strong> For writing data (e.g., <code>fs.createWriteStream</code>).
          </li>
          <li>
            <strong>Duplex Streams:</strong> For both reading and writing (e.g., sockets).
          </li>
          <li>
            <strong>Transform Streams:</strong> For modifying or transforming data as it is read or written.
          </li>
        </ul>
      </section>

      <section>
        <h2>Examples</h2>
        <h3>Reading a File with Streams</h3>
        <pre>
          <code>{`
const fs = require('fs');

const readStream = fs.createReadStream('largeFile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('New chunk received:', chunk);
});

readStream.on('end', () => {
  console.log('No more data to read.');
});
          `}</code>
        </pre>

        <h3>Writing to a File with Streams</h3>
        <pre>
          <code>{`
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello, World!\\n');
writeStream.write('Stream API is powerful!\\n');
writeStream.end(() => {
  console.log('Finished writing data.');
});
          `}</code>
        </pre>

        <h3>Piping Data Between Streams</h3>
        <p>
          The <code>pipe()</code> method connects two streams and efficiently transfers data between them.
        </p>
        <pre>
          <code>{`
const fs = require('fs');

const readStream = fs.createReadStream('largeFile.txt');
const writeStream = fs.createWriteStream('copiedFile.txt');

readStream.pipe(writeStream);

readStream.on('end', () => {
  console.log('File copied successfully!');
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What is the primary purpose of streams in Node.js?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="Efficiently handle large amounts of data in chunks."
              />
              Efficiently handle large amounts of data in chunks.
            </label>
            <label>
              <input
                type="radio"
                name="q1"
                value="Perform synchronous operations on files."
              />
              Perform synchronous operations on files.
            </label>
          </div>
          <div>
            <p>2. Which method is used to create a readable stream for a file?</p>
            <label>
              <input type="radio" name="q2" value="fs.createReadStream" />
              fs.createReadStream
            </label>
            <label>
              <input type="radio" name="q2" value="fs.readFile" />
              fs.readFile
            </label>
          </div>
          <div>
            <p>3. What does the <code>pipe()</code> method do?</p>
            <label>
              <input type="radio" name="q3" value="stream.pipe" />
              Connects two streams and transfers data between them.
            </label>
            <label>
              <input
                type="radio"
                name="q3"
                value="Saves data to a database directly."
              />
              Saves data to a database directly.
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
            <a
              href="https://nodejs.org/api/stream.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js Stream Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.digitalocean.com/community/tutorials/understanding-streams-in-nodejs"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigitalOcean: Understanding Streams in Node.js
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StreamAPI;
