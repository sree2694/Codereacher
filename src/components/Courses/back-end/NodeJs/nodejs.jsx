import React, { useState } from 'react';
import WhatIsNodejs from './contents/WhatIsNodejs';
import Architecture from './contents/Architecture';
import GettingStarted from './contents/GettingStarted';


const NodeJsPage = () => {
    const [activeNav, setActiveNav] = useState(null);

    // Sidebar navigation items
    const sidebarItems = [
        {
            groupName: "Introduction",
            items: [
                { name: "What is NodeJs?", component: <WhatIsNodejs /> },
                { name: "Architecture", component: <Architecture/> },
                { name: "Getting Started", component: <GettingStarted /> },
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
        <div className="nodejs-page">
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
                <div className="content-details">
                    {activeNav
                        ? sidebarItems
                            .flatMap((group) => group.items)
                            .find((item) => item.name === activeNav)?.component
                        : "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."}
                </div>
            </main>
        </div>
    );
};

export default NodeJsPage;
