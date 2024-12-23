import React from 'react';
import '../css/Media.css';

const Media = () => {
    return (
        <div className="media-concepts">
            <h2>What is Media in HTML?</h2>
            <p>
                Media in HTML refers to elements that allow embedding of multimedia content such as images, videos, and audio. These elements enhance web pages by making them more interactive and engaging.
            </p>

            <h2>Types of Media Elements</h2>
            <ul>
                <li><code>&lt;img&gt;</code>: Embeds images into a webpage.</li>
                <li><code>&lt;audio&gt;</code>: Embeds audio files.</li>
                <li><code>&lt;video&gt;</code>: Embeds video content.</li>
                <li><code>&lt;iframe&gt;</code>: Embeds another HTML document within a webpage.</li>
                <li><code>&lt;embed&gt;</code>: Embeds external content, like plugins or interactive tools.</li>
                <li><code>&lt;object&gt;</code>: Represents external resources, such as PDFs or Flash objects.</li>
            </ul>

            <h2>Examples of Media Embedding</h2>

            <h3>Embedding an Image</h3>
            <pre className="code-snippet">
{`<img src="example.jpg" alt="Example Image" width="600" height="400">`}
            </pre>

            <h3>Embedding Audio</h3>
            <pre className="code-snippet">
{`<audio controls>
    <source src="audiofile.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>`}
            </pre>

            <h3>Embedding Video</h3>
            <pre className="code-snippet">
{`<video controls width="600">
    <source src="videofile.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`}
            </pre>

            <h3>Embedding an Iframe</h3>
            <pre className="code-snippet">
{`<iframe src="https://example.com" width="600" height="400">
    Your browser does not support iframes.
</iframe>`}
            </pre>

            <h2>Best Practices for Using Media</h2>
            <ul>
                <li>Use the <code>alt</code> attribute for images to improve accessibility.</li>
                <li>Ensure media files are optimized for web performance.</li>
                <li>Use fallback content for unsupported browsers.</li>
                <li>Provide captions or transcripts for audio and video content.</li>
            </ul>

            <h2>Quiz</h2>
            <ol>
                <li>What HTML tag is used to embed audio files?</li>
                <li>Write an example of embedding a YouTube video using an <code>&lt;iframe&gt;</code>.</li>
                <li>Why is it important to use the <code>alt</code> attribute for images?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTML Elements</a></li>
                <li><a href="https://www.w3schools.com/html/html_media.asp" target="_blank" rel="noopener noreferrer">W3Schools - HTML Media</a></li>
                <li><a href="https://html.spec.whatwg.org/multipage/media.html" target="_blank" rel="noopener noreferrer">HTML Living Standard - Media</a></li>
            </ul>
        </div>
    );
};

export default Media;
