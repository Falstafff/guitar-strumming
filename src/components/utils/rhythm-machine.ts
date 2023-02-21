export type OnPlay = (currentTime: number, currentBeat: number, currentBar: number) => void;

export type TimeSignature = { top: number, bottom: number };

export class RhythmMachine {
    private _bpm: number;
    private bps: number;
    private _timeSignature: TimeSignature;
    private currentTime: number;
    private interval: number;
    private currentBar: number;
    private currentBeat: number;
    private readonly maxDuration: number;
    private readonly minDuration: number;
    private readonly totalBars: number;

    private _onPlay: OnPlay = () => {};

    constructor(
        bpm: number,
        timeSignature: TimeSignature,
        totalBars: number,
        minDuration: number
    ) {
        this.totalBars = totalBars - 1;
        this.timeSignature = timeSignature;
        this.bpm = bpm;
        this.minDuration = this.getNewDuration(minDuration);
        this.maxDuration = this.getNewDuration(1);
        this.resetTimeState();
    }

    private resetTimeState(): void {
        this.currentTime = 0;
        this.currentBeat = 0;
        this.currentBar = 0;
    }

    public set bpm(bpm: number) {
        this._bpm = bpm;
        this.bps = 60 / this.bpm;
    }

    public set timeSignature(signature: TimeSignature) {
        this._timeSignature = signature;
    }

    public get timeSignature() {
        return this._timeSignature;
    }

    public get bpm(): number {
        return this._bpm;
    }

    public set onPlay(onPlay: OnPlay) {
        this._onPlay = onPlay;
    }

    public start(): void {
        this.interval = setInterval(this.play.bind(this), this.minDuration * 1000);
    }

    public stop(): void {
        clearInterval(this.interval);
    }

    public reset(): void {
        this.stop();
        this.resetTimeState();
    }

    private play(): void {
        const isBeatUp: boolean = this.currentTime >= this.maxDuration;
        const isBarUp: boolean = isBeatUp && this.currentBeat >= this.timeSignature.top - 1;

        if (isBeatUp) {
            this.currentTime = 0;
            this.currentBeat += this.getOriginalDuration(this.maxDuration);
        }

        if (isBarUp) {
            this.currentBeat = 0;
            this.currentBar++;
        }

        if (this.currentBar > this.totalBars) {
            this.resetTimeState();
        }

        this._onPlay(this.currentTime, this.currentBeat, this.currentBar);

        this.currentTime += this.getOriginalDuration(this.minDuration);
    }

    public getNewDuration(duration: number): number {
        return this.bps * (duration);
    }

    public getOriginalDuration(duration: number): number {
        return (duration / this.bps);
    }
}
