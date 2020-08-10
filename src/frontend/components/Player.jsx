import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../containers/Layout';
import NotFoundMessage from './NotFoundMessage';
import LoadingMessage from './LoadingMessage';
import { getVideoSource } from '../redux/actions';
import '../assets/styles/components/Player.scss';

const Player = ({ playingVideoSource, match }) => {

  useLayoutEffect(() => {
    props.getVideoSource(match.params.id);
  }, []);

  function goBack() {
    props.history.goBack();
  }

  if (playingVideoSource === '') {
    return (
      <Layout>
        <LoadingMessage />
      </Layout>
    );
  } if (playingVideoSource) {
    return (
      <>
        <video controls autoPlay>
          <source src={playingVideoSource} type='video/mp4' />
        </video>
        <div className='Player-back'>
          {/* Go back */}
          {/* <Link to="/"> */}
          <button type='button' onClick={goBack}>
            Go back
          </button>
          {/* </Link> */}
        </div>
      </>
    );
  }
  return (
    <Layout>
      <NotFoundMessage />
    </Layout>
  );

};

const mapStateToProps = (state) => ({
  playingVideoSource: state.playingVideoSource,
});

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
