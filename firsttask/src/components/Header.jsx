import React from "react";


const Header = () => {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return (
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <h2>{greeting}</h2>
        </header>
    );
};

export default Header;