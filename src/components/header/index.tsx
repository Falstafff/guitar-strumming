import PlayButton from "../play-button";
import './styles.css';

function Header({onPlay, bpm, name}: { onPlay: (isPlaying: boolean) => void, bpm: number, name: string }){
    return (
        <header className="strumming-header">
            <PlayButton onPlay={onPlay}>
                <span className="btn-info">
                    <spna className="name">{name}</spna>
                    <spna className="bpm">{bpm} bpm</spna>
                </span>
            </PlayButton>
        </header>
    )
}

export default Header;