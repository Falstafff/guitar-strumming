import {useEffect, useState} from "react";
import Header from "../header";
import {Bar, Beat} from "../../common/types";
import {GuitarPlayer} from "../utils/player/guitar-player";
import {RhythmMachine} from "../utils/rhythm-machine";
import {getResetBarsCurrent, getSetCurrentBars} from "./utils";
import Beats from "../beats";
import './styles.css';

function Strumming({externalBars, rhythmMachine, guitarPlayer, bpm, noteLength}: StrummingProps) {
    const [bars, setBars] = useState(externalBars as Bar[]);

    useEffect(() => {
        rhythmMachine.onPlay = (currentTime, currentBeat, currentBar) => {
            const bar: Bar = bars[currentBar];
            const beatIndex: number = currentTime + currentBeat;
            const beat: Beat = bar[beatIndex];

            if (beat) {
                setBars(getSetCurrentBars(bars, beatIndex));
                guitarPlayer.play(['A2', 'E3', 'A3', 'C#3'], beat);
            }
        }
    })

    const onPlay = (isPlaying: boolean): void => {
        if (isPlaying) {
            rhythmMachine.start();
            return;
        }

        rhythmMachine.reset();
        setBars(getResetBarsCurrent(bars))
    }

    return (
        <div className="strumming-container">
            <Header bpm={bpm} onPlay={onPlay}/>
            <Beats bars={bars} noteLength={noteLength} />
        </div>
    )
}

type StrummingProps = {
    bpm: number,
    noteLength: number,
    externalBars: Bar[],
    rhythmMachine: RhythmMachine,
    guitarPlayer: GuitarPlayer
}

export default Strumming
