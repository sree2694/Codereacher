import React, { useState } from 'react';
import WhatIsSpringBoot from './contents/WhatIsSpringBoot';
import GetStarted from './contents/GetStarted';


const SpringBootPage = () => {
    const [activeNav, setActiveNav] = useState(null);

    // Sidebar navigation items
    const sidebarItems = [
        {
            groupName: "Introduction",
            items: [
                { name: "What is Spring Boot?", component: <WhatIsSpringBoot /> },
                { name: "Setting Up Spring Boot", component: <GetStarted /> },
                // { name: "Key Features", component: <KeyFeatures /> },
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
                <div className="content-details">
                    {activeNav
                        ? sidebarItems
                            .flatMap((group) => group.items)
                            .find((item) => item.name === activeNav)?.component
                        : "Spring Boot is an open-source Java framework used for programming standalone, production-grade Spring-based applications with a bundle of libraries that make project startup and management easier."}
                </div>
            </main>
        </div>
    );
};

export default SpringBootPage;
