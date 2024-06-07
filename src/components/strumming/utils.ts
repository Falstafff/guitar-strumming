import {Bar, Beat} from "../../common/types";

export const getResetBarsCurrent = (bars: Bar[]): Bar[] => bars.map(bar => {
    for (const beatKey in bar) {
        const beat = bar[beatKey];
        beat.current = false;
    }

    return bar;
});

export const getSetCurrentBars = (bars: Bar[], currentBeat: Beat): Bar[] => {
  for (const bar of bars) {
    for (const beatKey in bar) {
      bar[beatKey].current = false;
    }
  }

  currentBeat.current = true;

  return [...bars];
}