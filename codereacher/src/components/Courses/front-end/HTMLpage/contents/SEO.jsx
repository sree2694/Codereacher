import React from 'react';
import '../css/SEO.css';

const SEO = () => {
    return (
        <div className="seo-best-practices">
            <h2>What is SEO?</h2>
            <p>
                SEO (Search Engine Optimization) is the practice of optimizing web content to rank higher in search engine results pages (SERPs). It involves enhancing the quality and relevance of content, improving site performance, and ensuring accessibility to search engine crawlers.
            </p>

            <h2>Why is SEO Important?</h2>
            <p>
                SEO drives organic traffic to your website, increasing visibility and potential engagement. A well-optimized website ensures better user experience, higher credibility, and long-term business growth.
            </p>

            <h2>SEO Best Practices</h2>

            <h3>1. Use Semantic HTML</h3>
            <p>
                Semantic HTML tags, such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code>, improve the readability of your website for search engines.
            </p>
            <pre className="code-snippet">
{`<article>
    <header>
        <h1>Blog Post Title</h1>
        <p>Published on: January 1, 2024</p>
    </header>
    <p>Content of the blog goes here...</p>
</article>`}
            </pre>

            <h3>2. Optimize Meta Tags</h3>
            <p>
                Meta tags provide critical information about your webpage to search engines and users. Key meta tags include:
            </p>
            <ul>
                <li><strong>Title Tag</strong>: A concise title describing the page content.</li>
                <li><strong>Meta Description</strong>: A summary of the page, displayed in search results.</li>
                <li><strong>Meta Keywords</strong>: Relevant keywords (optional and less emphasized today).</li>
            </ul>
            <pre className="code-snippet">
{`<head>
    <title>Learn SEO Best Practices</title>
    <meta name="description" content="A comprehensive guide to SEO best practices for better search engine rankings.">
</head>`}
            </pre>

            <h3>3. Optimize Images</h3>
            <p>
                Use descriptive <code>alt</code> attributes for images to improve accessibility and search engine understanding.
            </p>
            <pre className="code-snippet">
{`<img src="example.jpg" alt="A scenic view of mountains at sunrise">`}
            </pre>

            <h3>4. Improve Website Performance</h3>
            <p>
                Faster websites rank better in search results. Optimize performance by:
            </p>
            <ul>
                <li>Compressing images.</li>
                <li>Minimizing CSS, JavaScript, and HTML.</li>
                <li>Leveraging browser caching and Content Delivery Networks (CDNs).</li>
            </ul>

            <h3>5. Mobile Optimization</h3>
            <p>
                Ensure your website is mobile-friendly by using responsive design techniques.
            </p>

            <h2>Examples</h2>
            <h3>Mobile-Friendly Navigation</h3>
            <pre className="code-snippet">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </pre>

            <h3>Structured Data</h3>
            <p>
                Use structured data (e.g., JSON-LD) to enhance search engine understanding of your content.
            </p>
            <pre className="code-snippet">
{`<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Learn SEO Best Practices",
    "author": "John Doe",
    "datePublished": "2024-01-01"
}
</script>`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What are semantic HTML tags, and why are they important for SEO?</li>
                <li>How can meta tags improve search engine rankings?</li>
                <li>Give an example of using the <code>alt</code> attribute for an image.</li>
                <li>What are some techniques to improve website performance?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developers.google.com/search/docs/advanced/intro" target="_blank" rel="noopener noreferrer">Google Search Central</a></li>
                <li><a href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer">Moz Beginner's Guide to SEO</a></li>
                <li><a href="https://web.dev/" target="_blank" rel="noopener noreferrer">Web.dev by Google</a></li>
            </ul>
        </div>
    );
};

export default SEO;
