import React from "react";
import "./HomePage.scss";
import robotCover from "/src/assets/images/AIGuard robot cover.png";
import leoImage from "/src/assets/images/AIGuard-leo-title.png";
import zoeyImage from "/src/assets/images/AIGuard-zoey.png";

const HomePage = () => {
    return (
        <main className="homepage">
            <div className="homepage__content">
                <img src={robotCover} alt="AI Guardians Robot" className="homepage__robot-image" />
                <h1 className="homepage__title">AI Guardians</h1>
                <p className="homepage__description">Explore the world of AI ethics and help the Guardians save Techville.</p>
                <p className="homepage__cta">Ready to Play?</p>
                <button className="homepage__button">
                    <a href="/chapter1">Start Chapter 1</a>
                </button>
            </div>
            <img src={leoImage} alt="Leo" className="homepage__leo" />
            <img src={zoeyImage} alt="Zoey" className="homepage__zoey" />
        </main>
    )
}

export default HomePage;
