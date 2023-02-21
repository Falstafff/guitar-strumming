import {AbstractPlayer} from "./abstract-player";
import {Beat} from "../../../common/types";

// https://tabs.ultimate-guitar.com/tab/jason-mraz/im-yours-chords-373896
export const REGULAR_NOTES = ['G5', 'G4', 'G3', 'G2', 'F4', 'F3', 'F2', 'E3', 'D5', 'D4', 'D3', 'C4', 'C3', 'B3', 'B2', 'A3', 'A2'];

export class GuitarPlayer extends AbstractPlayer {
    public play(notes: string[], beat: Beat): void {
        const currentNotes: string[] = beat.direction === 'down-up'
            ? notes.reverse() : notes;

        for (const note of currentNotes) {
            if (this.hasAudioNote(note)) {
                const audioNote = this.getAudioNote(note).cloneNode();
                audioNote.volume = beat.accent === 'high' ? .5 : .25 ;
                audioNote.play();
            }
        }
    }

    protected prepareAudio(): void {
        this.audioNotes = [...REGULAR_NOTES].reduce((notes, note) => {
            notes[note] = new Audio(`/sound/guitar/${note}.wav`)
            return notes;
        }, {});
    }
}