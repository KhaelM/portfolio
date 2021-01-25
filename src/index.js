import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Portfolio(props) {
    return (
        <div id="portfolio">
            <nav>
                <ul>
                    <li className="active">home</li>
                    <li>game development</li>
                    <li>web development</li>
                    <li>my story</li>
                </ul>
            </nav>
            <div id="content-container">
                <div id="home-container">
                    <div id="main-info">
                        <div className="name">michael</div>
                        <div className="name">randrianarisona</div>
                        <div id="job-title">software developer</div>
                    </div>
                    <div id="my-pic">
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
);
