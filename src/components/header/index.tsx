import PlayButton from "../play-button";
import './styles.css';

function Header({onPlay, bpm}: { onPlay: (isPlaying: boolean) => void, bpm: number }){
    return (
        <header className="strumming-header">
            <PlayButton onPlay={onPlay} name={`${bpm} bpm`}  isDisabled/>
        </header>
    )
}

export default Header;