import Strumming from './components/strumming';
import {TimeSignature} from "./components/utils/time-signature";
import {GuitarPlayer} from "./components/utils/player/guitar-player";
import {Bar} from "./common/types";
import {RhythmMachine} from "./components/utils/rhythm-machine";

const data = [
  {
    bpm: 80,
    noteLength: 1 / 8,
    signature: {
      beatsPerMeasure: 4,
      noteValue: 4
    },
    name: 'Intro',
    bars: [
      {
        '0': {
          direction: 'down-up',
          accent: 'high',
          chord: [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4",
          ]
        },
        '1': {
          direction: 'muted',
          accent: 'low',
          chord: [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4",
          ]
        },
        '2': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4",
          ]
        },
        '2.5': {
          direction: 'down-up',
          accent: 'low',
          chord: [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4",
          ]
        },
        '3': {
          direction: 'muted',
          accent: 'low',
          chord: [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4",
          ]
        },
      },
    ] as Bar[]
  },
  {
    bpm: 80,
    noteLength: 1 / 8,
    signature: {
      beatsPerMeasure: 4,
      noteValue: 4
    },
    name: 'Intro',
    bars: [
      {
        '0': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '0.5': {
          direction: 'down-up',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '1': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '1.5': {
          direction: 'down-up',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '2': {
          direction: 'top-down',
          accent: 'high',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '2.5': {
          direction: 'down-up',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '3': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '3.5': {
          direction: 'down-up',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
      }
    ] as Bar[]
  },
  {
    bpm: 120,
    noteLength: 1 / 16,
    signature: {
      beatsPerMeasure: 4,
      noteValue: 4
    },
    name: 'Intro',
    bars: [
      {
        '0': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '1': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '1.75': {
          direction: 'down-up',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '2': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '2.5': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '3.5': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
      },
      {
        '0': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '1': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '1.75': {
          direction: 'down-up',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '2': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '2.5': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
        '3.5': {
          direction: 'top-down',
          accent: 'low',
          chord: [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5",
          ]
        },
      }

    ] as Bar[]
  },
]

function App() {
  const guitarPlayer = new GuitarPlayer();

  return (
    <>
      {data.map(({name, bpm, noteLength, bars, signature}, index) => {
        const rm = new RhythmMachine(
          bpm,
          noteLength,
          signature,
          bars.length
        );

        return (
          <Strumming
            name={name}
            bpm={bpm}
            noteLength={noteLength}
            externalBars={bars}
            guitarPlayer={guitarPlayer}
            rhythmMachine={rm}
            key={index}
          />
        )
      })}
    </>
  )
}

export default App
