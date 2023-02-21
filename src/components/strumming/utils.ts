import {Bar} from "../../common/types";

export const getResetBarsCurrent = (bars: Bar[]): Bar[] => bars.map(bar => {
    for (const beatKey in bar) {
        const beat = bar[beatKey];
        beat.current = false;
    }

    return bar;
});

export const getSetCurrentBars = (bars: Bar[], beatIndex: number): Bar[] => bars.map(bar => {
    for (const beatKey in bar) {
        const beat = bar[beatKey];
        beat.current = false;
    }

    if (bar[beatIndex]) {
        bar[beatIndex].current = true;
    }

    return bar;
})