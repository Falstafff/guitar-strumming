import {Beat} from "../../../common/types";
import {Player} from "soundfont-player";

export abstract class AbstractPlayer {
    protected context: AudioContext;
    protected player: Player;

    constructor() {
        this.prepareAudio();
    }

    public abstract play(notes: string[], beat: Beat): void;
    public abstract stop(): void;

    protected abstract prepareAudio(): void;
}