import {Beat} from "../../../common/types";
import {Player} from "soundfont-player";

export abstract class AbstractPlayer {
    protected context: AudioContext;
    protected player: Player;

    protected constructor() {
        this.prepareAudio();
    }

    public abstract play(notes: string[], beat: Beat): void;

    protected abstract prepareAudio(): void;

    // public getAudioNote(note: string) {
    //     return this._audioNodes[note];
    // }
    //
    // public hasAudioNote(note: string): boolean {
    //     return !!this._audioNodes[note]
    // }
    //
    // public set audioNotes(audioNotes: Record<any, any>) {
    //     this._audioNodes = audioNotes;
    // }
}