import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import PlayerContext from '../contexts/PlayerContext';
import FlowPlayerControls from './FlowPlayerControls';
import { round } from '../utils/round';

const FlowPlayer = () => {
    const id = Number(window.location.toString().split('/')[4]);
    const currentFlow = useSelector(state => {
        for (let flow of state.flows) {
            if (flow.id === id) {
                return flow;
            }
        }
    });
    const [playing, setPlaying] = useState(false);
    const [player, setPlayer] = useState(null);
    const [timestamp, setTimestamp] = useState(0);

    const opts = {
        playerVars: {
            controls: 0
        }
    }

    const onReady = (event) => {
        setPlayer(event.target);
        console.log(event.target);
    }

    const onPlay = () => {
        setPlaying(true);
    }

    const onPause = () => {
        setPlaying(false);
        setTimestamp(round(player.getCurrentTime(), 2));
    }

    const togglePlay = () => {
        if (playing) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }

    const seek = (event) => {
        if (playing) {
            let time = player.getCurrentTime();

            if (event.target.id === 'rewind') {
                player.seekTo(time - 2);
            }

            if (event.target.id === 'forward') {
                player.seekTo(time + 2)
            }
        }
    }

    const value = {
        player,
        playing,
        handlers: {
            togglePlay,
            seek
        }
    }

    return (
        <PlayerContext.Provider value={value}>
        <YouTube opts={opts} onPlay={onPlay} onPause={onPause} onReady={onReady} videoId={currentFlow.videoId}/>
        <FlowPlayerControls />
        </PlayerContext.Provider>
    )
}

export default FlowPlayer;