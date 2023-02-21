export type AccentStrength = 'low' | 'high';

export type ArrowDirection = 'up-down' | 'down-up' | 'pause' | 'muted'

export type Beat = {
    accent: AccentStrength,
    direction: ArrowDirection,
    muted: boolean,
    current?: boolean
}

export type Bar = {
    [noteTime: string]: Beat
}

export type NoteBeat = {
    symbol: string,
    beat: Beat,
}