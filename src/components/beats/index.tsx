import classNames from "classnames";
import Arrow from "../arrow";
import Accent from "../accent";
import {getBeasts, getNoteClassByLength} from "./utils";
import {Bar, NoteBeat} from "../../common/types";
import './styles.css';

function Beats({bars, noteLength}: { bars: Bar[], noteLength: number }) {
    const noteBeats: NoteBeat[] = getBeasts(
        bars,
        noteLength
    );

    const notesClasses: string = classNames([
        'notes',
        getNoteClassByLength(noteLength)
    ]);

    return (
        <section className="beats-container">
            <div className="arrows">
                {noteBeats.map((noteBeat: NoteBeat, index) => (
                    <div key={index}>
                        <Accent
                            strength={noteBeat.beat.accent}
                            isCurrent={noteBeat.beat.current ?? false}
                        />
                        <Arrow
                            direction={noteBeat.beat.direction}
                            isCurrent={noteBeat.beat.current ?? false}
                        />
                    </div>
                ))}
            </div>
            <div className={notesClasses}>
                {noteBeats.map((noteBeat,index) => (
                    <div key={index}>{noteBeat.symbol}</div>
                ))}
            </div>
        </section>
    )
}

export default Beats;