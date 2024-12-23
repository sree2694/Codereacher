import React, { useState } from 'react';

import WhatIsAngular from "./contents/WhatIsAngular";
import GetStarted from "./contents/GetStarted";
import ProjectSetup from "./contents/ProjectSetup";
import ModelViewController from "./contents/ModelViewController";



const AngularPage = () => {
    const [activeNav, setActiveNav] = useState(null);

    // Sidebar navigation items
    const sidebarItems = [
        {
            groupName: "Introduction",
            items: [
                { name: "What is Angular?", component: <WhatIsAngular /> },
                { name: "Get Started", component: <GetStarted /> },
                { name: "Project Setup", component: <ProjectSetup /> },
            ],
        },
        {
            groupName: "Core Concepts",
            items: [
                { name: "Model View Controller (MVC)", component: <ModelViewController /> },
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
                <h1>AngularJS</h1>
                <div className="content-details">
                    {activeNav
                        ? sidebarItems
                            .flatMap((group) => group.items)
                            .find((item) => item.name === activeNav)?.component
                        : "Welcome to the AngularJs learning page. Select a topic from the sidebar to begin exploring."}
                </div>
            </main>
        </div>
    );
};

export default AngularPage;
