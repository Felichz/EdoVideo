import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Player.scss';

const Player = () => {
    return (
        <>
            <video controls autoPlay>
                <source
                    src="https://anderssonfelix.com/edovideo/testVideo.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="Player-back">
                <button type="button">
                    <Link to="/">Back to Home</Link>
                </button>
            </div>
        </>
    );
}
 
export default Player;