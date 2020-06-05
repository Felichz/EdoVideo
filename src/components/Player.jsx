import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from '../containers/NotFound';
import { getVideoSource } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Player.scss';

const Player = props => {

    const id = props.match.params.id;

    useLayoutEffect(() => {
        props.getVideoSource(id);
    }, []);

    return props.playingVideoSource ?
        <>
            <video controls autoPlay>
                <source
                    src={props.playingVideoSource}
                    type="video/mp4"
                />
            </video>
            <div className="Player-back">
                {/* Go back */}
                <Link to="/">
                    <button type="button">
                        Back to Home
                    </button>
                </Link>
            </div>
        </>
        :
        // <Redirect to='/404'/>
        <NotFound/>
}

const mapStateToProps = state => ({
    playingVideoSource: state.playingVideoSource
});

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);