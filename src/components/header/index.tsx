import PlayButton from "../play-button";
import './styles.css';

function Header({onPlay, bpm, name}: { onPlay: (isPlaying: boolean) => void, bpm: number, name: string }){
    return (
        <header className="strumming-header">
            <PlayButton onPlay={onPlay}>
                <span className="btn-info">
                    <span className="name">{name}</span>
                    <span className="bpm">{bpm} bpm</span>
                </span>
            </PlayButton>
        </header>
    )
}

export default Header;