import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import audio from "./../assets/audio/idea_1.wav"

const Player = () => {
    <AudioPlayer
        autoPlay
        src={audio}
        onPlay={e => console.log("onPlay")}
        // other props here
    />
}

export default Player;