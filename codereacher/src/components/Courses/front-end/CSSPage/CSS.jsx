import React, { useState } from 'react';
import './css/WhatIsCSS.css';
import WhatIsCSS from "./contents/WhatIsCSS";
import GettingStarted from "./contents/GettingStarted";
import Selectors from "./contents/Selectors";
import Properties from "./contents/Properties";
import Values from "./contents/Values";
import Specificity from "./contents/Specificity";
import Flexbox from "./contents/Flexbox";
import GridLayout from "./contents/GridLayout";


const CSSPage = () => {
    const [activeNav, setActiveNav] = useState(null);

    // Sidebar navigation items
    const sidebarItems = [
        {
            groupName: "Introduction",
            items: [
                { name: "What is CSS?", component: <WhatIsCSS /> },
                { name: "Get Started", component: <GettingStarted /> },
            ],
        },
        {
            groupName: "Core Concepts",
            items: [
                { name: "Selectors", component: <Selectors /> },
                { name: "Properties", component: <Properties /> },
                { name: "Values", component: <Values /> },
                { name: "Specificity", component: <Specificity /> },
            ],
        },
        {
            groupName: "Advanced Topics",
            items: [
                { name: "FlexBox", component: <Flexbox /> },
                { name: "Grid Layout", component: <GridLayout /> },
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

export default CSSPage;
