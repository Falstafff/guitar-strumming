import {useEffect, useState} from "react";
import Header from "../header";
import {Bar, Beat} from "../../common/types";
import {GuitarPlayer} from "../utils/player/guitar-player";
import {getResetBarsCurrent, getSetCurrentBars} from "./utils";
import Beats from "../beats";
import {RhythmMachine} from "../utils/rhythm-machine";
import './styles.css';

function Strumming({name, bpm, noteLength, externalBars, rhythmMachine, guitarPlayer}: StrummingProps) {
  const [bars, setBars] = useState(externalBars as Bar[]);

  useEffect(() => {
    rhythmMachine.emitCallback = (currentBar, currentBeat) => {
      const bar: Bar = bars[currentBar];
      const beat: Beat = bar[currentBeat];

      if (beat) {
        setBars(getSetCurrentBars(bars, beat));
        guitarPlayer.play(beat?.chord ?? [], beat);
      }
    }
  }, []);

  const onPlay = (isPlaying: boolean): void => {
    if (isPlaying) {
      rhythmMachine.start();
      return;
    }

    rhythmMachine.reset();
    guitarPlayer.stop();
    setBars(getResetBarsCurrent(bars))
  }

  return (
    <div className="strumming-container">
      <Header name={name} bpm={bpm} onPlay={onPlay}/>
      <Beats bars={bars} noteLength={noteLength}/>
    </div>
  )
}

type StrummingProps = {
  bpm: number,
  noteLength: number,
  externalBars: Bar[],
  name: string,
  rhythmMachine: RhythmMachine,
  guitarPlayer: GuitarPlayer,
  key?: number
}

export default Strumming
