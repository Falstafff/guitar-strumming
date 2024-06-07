import {TimeSignature} from "../../common/types";

export class Song {
    private readonly _bars: any[];
    private readonly _bpm: number;
    private readonly _timeSignature: TimeSignature;

    constructor(bpm : number, timeSignature: TimeSignature, bars: any[]) {
        this._bpm = bpm;
        this._timeSignature = timeSignature;
        this._bars = bars;
    }

    public get bpm(): number {
        return this._bpm;
    }

    public get timeSignature(): TimeSignature {
        return this._timeSignature;
    }

    public get barsLength(): number {
        return this._bars.length;
    }

    public get bars(): any[] {
        return this._bars;
    }

    public hasSegment(bar: number, moment: string): boolean {
        return this._bars[bar] && this._bars[bar][moment];
    }

    public getSegment(bar: number, moment: string) {
        return this._bars[bar][moment];
    }
}