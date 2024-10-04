import React from "react";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <main className="homepage">
            <div className="homepage__content">
                <h1 className="homepage__title">AI Guardians</h1>
                <p className="homepage__description">Explore the world of AI ethics and help the Guardians save Techville.</p>
                <p className="homepage__cta">Ready to Play?</p>
                <button className="homepage__button">
                    <a href="/chapter1">Start Chapter 1</a>
                </button>
            </div>
        </main>
    )
}

export default HomePage;