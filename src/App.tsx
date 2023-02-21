import Strumming from './components/strumming';
import {TimeSignature} from "./components/utils/time-signature";
import {GuitarPlayer} from "./components/utils/player/guitar-player";
import {RhythmMachine} from "./components/utils/rhythm-machine";
import {Bar} from "./common/types";

const data = [
    {
        bpm: 80,
        noteLength: 1 / 4,
        signature: new TimeSignature('4/4'),
        name: 'Intro',
        bars: [
            {
                '0': {
                    direction: 'down-up',
                    accent: 'high'
                },
                '2': {
                    direction: 'muted',
                    accent: 'low',
                }
            }
        ] as Bar[]
    },
    {
        bpm: 80,
        noteLength: 1 / 8,
        signature: new TimeSignature('4/4'),
        name: 'Intro',
        bars: [
            {
                '0': {
                    direction: 'down-up',
                    accent: 'high'
                },
                '2': {
                    direction: 'muted',
                    accent: 'low',
                }
            }
        ] as Bar[]
    },
    {
        bpm: 80,
        noteLength: 1 / 16,
        signature: new TimeSignature('4/4'),
        name: 'Intro',
        bars: [
            {
                '0': {
                    direction: 'down-up',
                    accent: 'high'
                },
                '2': {
                    direction: 'muted',
                    accent: 'low',
                }
            }
        ] as Bar[]
    }
]

function App() {
    const  guitarPlayer = new GuitarPlayer();

    return (
        data.map(({name, bpm, noteLength,  bars, signature}, index) => {
            const rhythmMachine = new RhythmMachine(
                bpm,
                signature,
                bars.length,
                noteLength
            );

            return (
                <Strumming
                    name={name}
                    bpm={bpm}
                    noteLength={noteLength}
                    externalBars={bars}
                    guitarPlayer={guitarPlayer}
                    rhythmMachine={rhythmMachine}
                    key={index}
                />
            )
        })
    )
}

export default App
