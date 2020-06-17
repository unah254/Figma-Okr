import React from 'react';
import '../assets/css/page.scss';
import TopComponent from "./TopComponent";
import CenterComponent from "./MiddleComponent";

const MainComponent = () => {
    return (
        <div className="page">
            <TopComponent/>
            <CenterComponent/>
        </div>
    )
}

export default MainComponent;
