import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"

class Terminal extends React.Component {
    render() {
        return (
            <div className="terminal">
                <div className="top-bar">
                    <div className="tabs"></div>
                    <div className="exit-button" >
                        <Link to="/">
                            <AiFillCloseCircle className="exit-icon" />
                        </Link>
                    </div>
                </div>
                <div className="terminal-txt">
                    <p>Work in progress...</p>
                </div>
            </div>
        )
    }
}

export default Terminal;