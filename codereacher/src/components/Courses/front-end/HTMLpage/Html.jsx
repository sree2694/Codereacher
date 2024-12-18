import React, { useState } from 'react';
import './css/WhatIsHTML.css';

// Importing individual content components
import WhatIsHTML from "./contents/WhatIsHTML";
import GettingStarted from "./contents/GettingStarted";
import Elements from "./contents/Elements";
import Semantic from "./contents/Semantic";
import Media from "./contents/Media";
import Forms from "./contents/Forms";
import Lists from "./contents/Lists";
import HTML5 from "./contents/HTML5";
import ResponsiveDesign from "./contents/ResponsiveDesign";
import ARIA from "./contents/ARIA";
import SEO from "./contents/SEO";
import OtherTechnologies from "./contents/OtherTechnologies";

const HTMLPage = () => {
    const [activeNav, setActiveNav] = useState(null);

    // Sidebar navigation items
    const sidebarItems = [
        {
            groupName: "Introduction",
            items: [
                { name: "What is HTML?", component: <WhatIsHTML /> },
                { name: "Get Started", component: <GettingStarted /> },
            ],
        },
        {
            groupName: "Core Concepts",
            items: [
                { name: "Elements", component: <Elements /> },
                { name: "Semantic HTML", component: <Semantic /> },
                { name: "Media and Embedding", component: <Media /> },
                { name: "Forms and Input", component: <Forms/> },
                { name: "Lists", component: <Lists/> },
            ],
        },
        {
            groupName: "Advanced Topics",
            items: [
                { name: "HTML5 Features", component: <HTML5/> },
                { name: "Responsive Design", component: <ResponsiveDesign/> },
                { name: "ARIA", component: <ARIA/> },
                { name: "SEO Best Practices", component: <SEO/> },
                { name: "Other Technologies", component: <OtherTechnologies/> },
            ],
        },
    ];

    return (
        <div className="html-page">
            {/* Sidebar */}
            <aside className="sidebar">
                {sidebarItems.map((group, groupIndex) => (
                    <div className="nav-group" key={groupIndex}>
                        <h3 className="nav-group-title">{group.groupName}</h3>
                        <ul className="nav-items">
                            {group.items.map((item, itemIndex) => (
                                <li
                                    key={itemIndex}
                                    className={`nav-item ${activeNav === item.name ? 'active' : ''}`}
                                    onClick={() => setActiveNav(item.name)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>

            {/* Main Content */}
            <main className="content">
                <h1>React</h1>
                <div className="content-details">
                    {activeNav
                        ? sidebarItems
                            .flatMap((group) => group.items)
                            .find((item) => item.name === activeNav)?.component
                        : "Welcome to the HTML learning page. Select a topic from the sidebar to begin exploring."}
                </div>
            </main>
        </div>
    );
};

export default HTMLPage;
