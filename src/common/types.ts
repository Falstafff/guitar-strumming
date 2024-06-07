export type AccentStrength = 'low' | 'high';

export type ArrowDirection = 'top-down' | 'down-up' | 'pause' | 'muted'

export type Beat = {
    accent: AccentStrength,
    direction: ArrowDirection,
    current?: boolean,
    chord?: string[]
}

export type Bar = {
    [noteTime: string]: Beat
}

export type NoteBeat = {
    symbol: string,
    beat: Beat,
}

export type TimeSignature = {
  beatsPerMeasure: number,
  noteValue: number
}