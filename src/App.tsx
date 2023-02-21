import Strumming from './components/strumming';
import {TimeSignature} from "./components/utils/time-signature";
import {GuitarPlayer} from "./components/utils/player/guitar-player";
import {RhythmMachine} from "./components/utils/rhythm-machine";
import {Bar} from "./common/types";
import Soundfont from 'soundfont-player';


function App() {
  const bpm = 80;
  const noteLength = 1/16;
  const signature = new TimeSignature('4/4');

  const bars = [
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

  const guitarPlayer = new GuitarPlayer();

  const rhythmMachine = new RhythmMachine(
      bpm,
      signature,
      bars.length,
      noteLength
  );

  return (
      <Strumming
          bpm={bpm}
          noteLength={noteLength}
          externalBars={bars}
          guitarPlayer={guitarPlayer}
          rhythmMachine={rhythmMachine}
      />
  )
}

export default App
