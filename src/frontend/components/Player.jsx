import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../containers/Layout';
import NotFoundMessage from './NotFoundMessage';
import LoadingMessage from './LoadingMessage';
import { getVideoSource } from '../redux/actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
    const id = props.match.params.id;

    useLayoutEffect(() => {
        props.getVideoSource(id);
    }, []);

    function goBack() {
        props.history.goBack();
    }

    if (props.playingVideoSource === '') {
        return (
            <Layout>
                <LoadingMessage />
            </Layout>
        );
    } else if (props.playingVideoSource) {
        return (
            <>
                <video controls autoPlay>
                    <source src={props.playingVideoSource} type="video/mp4" />
                </video>
                <div className="Player-back">
                    {/* Go back */}
                    {/* <Link to="/"> */}
                    <button type="button" onClick={goBack}>
                        Go back
                    </button>
                    {/* </Link> */}
                </div>
            </>
        );
    } else {
        return (
            <Layout>
                <NotFoundMessage />
            </Layout>
        );
    }
};

const mapStateToProps = (state) => ({
    playingVideoSource: state.playingVideoSource,
});

const mapDispatchToProps = {
    getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
