import {AbstractPlayer} from "./abstract-player";
import {Beat} from "../../../common/types";
import Soundfont from "soundfont-player";

export class GuitarPlayer extends AbstractPlayer {
    public play(notes: string[], beat: Beat): void {
        const currentNotes: string[] = beat.direction === 'down-up'
            ? notes.reverse() : notes;

        for (const noteIndex in currentNotes) {
            const note = notes[noteIndex];
            this.player.play(note, this.context.currentTime, {
                sustain: beat.direction === "muted" ? .1 : .5,
                gain: beat.accent === 'high' ? 1 : .6
            });
        }
    }

    protected async prepareAudio(): Promise<void> {
        this.context = new AudioContext();
        this.player = await Soundfont.instrument(this.context, 'acoustic_guitar_steel');
    }
}