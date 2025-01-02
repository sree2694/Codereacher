import React, { useState } from 'react';
import WhatIsBootstrap from './contents/WhatIsBootstrap';
import GetStarted from './contents/GetStarted';
import GridSystem from './contents/GridSystem';


const BootstrapPage = () => {
    const [activeNav, setActiveNav] = useState(null);

    // Sidebar navigation items
    const sidebarItems = [
        {
            groupName: "Introduction",
            items: [
                { name: "What is Bootstrap?", component: <WhatIsBootstrap /> },
                { name: "Getting Started", component: <GetStarted /> },
                { name: "Grid System Basics", component: <GridSystem /> },
                // { name: "Responsive Design", component: <ResponsiveDesign /> },
                // { name: "Basic Components", component: <BasicComponents /> },
                // { name: "Typography", component: <Typography /> },
            ],
        },
        {
            groupName: "Core Concepts",
            items: [
                // { name: "Bootstrap Utilities", component: <Utilities /> },
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
                        : "Bootstrap is a popular CSS framework for building responsive, mobile-first websites quickly and efficiently."}
                </div>
            </main>
        </div>
    );
};

export default BootstrapPage;
