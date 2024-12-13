import React, { useState } from 'react';
import './css/WhatIsHTML.css';

// Importing individual content components
import WhatIsHTML from "./contents/WhatIsHTML";
import GettingStarted from "./contents/GettingStarted";

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
            ],
        },
        {
            groupName: "Advanced Topics",
            items: [

            ],
        },
    ];

    return (
        <div className="react-page">
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
