import {Beat} from "../../../common/types";

export abstract class AbstractPlayer {
    private _audioNodes: Record<string, any>;

    protected constructor() {
        this.prepareAudio();
    }

    public abstract play(notes: string[], beat: Beat): void;

    protected abstract prepareAudio(): void;

    public getAudioNote(note: string) {
        return this._audioNodes[note];
    }

    public hasAudioNote(note: string): boolean {
        return !!this._audioNodes[note]
    }

    public set audioNotes(audioNotes: Record<any, any>) {
        this._audioNodes = audioNotes;
    }
}