import {TimeSignature} from "../../common/types";

export type OnEmmitTime = (currentBar: number, currentBeat: number) => void;

export class RhythmMachine {
  private bps: number;
  private currentBeat: number;
  private currentBar: number;
  private interval: number;
  private timeSignature: TimeSignature;
  private readonly totalBars: number;
  private readonly minDuration: number;
  private _bpm: number;
  private callback: OnEmmitTime = () => {};

  constructor(
    bpm: number,
    minDuration: number,
    timeSignature: TimeSignature,
    totalBars: number = 1,
  ) {
    this.bpm = bpm;
    this.totalBars = totalBars;
    this.minDuration = minDuration;
    this.timeSignature = timeSignature;
    this.currentBeat = 0;
    this.currentBar = 0;
  }

  public get bpm(): number {
    return this._bpm;
  }

  public set bpm(bpm: number) {
    this._bpm = bpm;
    this.bps = 60 / this.bpm;
  }

  public set emitCallback(callback: OnEmmitTime) {
    this.callback = callback;
  }

  public start(): void {
    this.interval = setInterval(this.emit.bind(this), this.getIntervalTimeout());
  }

  public stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  public reset(): void {
    this.stop();
    this.currentBeat = 0;
    this.currentBar = 0;
  }

  private getIntervalTimeout() {
    return this.bps * this.minDuration * 1000;
  }

  private emit(): void {
    this.callback(this.currentBar, this.currentBeat);

    this.currentBeat += this.minDuration;

    if (this.currentBeat >= this.timeSignature.beatsPerMeasure) {
      this.currentBeat = 0;
      this.currentBar += 1;
    }

    if (this.currentBar === this.totalBars) {
      this.currentBar = 0;
    }
  }
}