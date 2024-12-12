import React, { useState } from 'react';
import './css/ReactPage.css';

// Importing individual content components
import WhatIsReact from './contents/WhatIsReact';
import KeyFeatures from './contents/KeyFeatures';
import Components from './contents/Components';
import JSX from './contents/JSX';
import StateAndProps from './contents/StateAndProps';
import Hooks from './contents/Hooks';
import ContextAPI from './contents/ContextAPI';
import PerformanceOptimization from './contents/PerformanceOptimization';
import GettingStarted from "./contents/GettingStarted";

const ReactPage = () => {
    const [activeNav, setActiveNav] = useState(null);

    // Sidebar navigation items
    const sidebarItems = [
        {
            groupName: "Introduction",
            items: [
                { name: "What is React?", component: <WhatIsReact /> },
                { name: "Get Started", component: <GettingStarted /> },
                { name: "Key Features", component: <KeyFeatures /> },
            ],
        },
        {
            groupName: "Core Concepts",
            items: [
                { name: "Components", component: <Components /> },
                { name: "JSX", component: <JSX /> },
                { name: "State & Props", component: <StateAndProps /> },
            ],
        },
        {
            groupName: "Advanced Topics",
            items: [
                { name: "Hooks", component: <Hooks /> },
                { name: "Context API", component: <ContextAPI /> },
                { name: "Performance Optimization", component: <PerformanceOptimization /> },
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
                        : "Welcome to the React learning page. Select a topic from the sidebar to begin exploring."}
                </div>
            </main>
        </div>
    );
};

export default ReactPage;
