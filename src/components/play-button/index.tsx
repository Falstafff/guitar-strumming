import './styles.css';
import {useState} from "react";

function PlayButton({ onPlay, children }: PlayButtonProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const onClick = () => {
        setIsPlaying(!isPlaying);
        onPlay(!isPlaying)
    }

    return (
        <button className="btn-play" onClick={onClick}>
            <svg width={20} height={20} viewBox="0 0 16 16" fill={isPlaying ? '#44db5e' : '#212121'}>
                <path d="M8 1C4.136 1 1 4.136 1 8s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7M7 11V5l4 3-4 3"></path>
            </svg>
            {children}
        </button>
    )
}

type PlayButtonProps = { onPlay: (isPlaying: boolean) => void, children};

export default PlayButton;