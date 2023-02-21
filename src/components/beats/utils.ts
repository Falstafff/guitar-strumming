import {Bar, NoteBeat} from "../../common/types";

export const getLinearValue = (num: number): number => 4 * num + 1

export const getBeasts = (bars: Bar[], noteLength: number = 1 / 4): NoteBeat[] => {
    const noteBeats: NoteBeat[] = [];

    for (let barIndex = 0; barIndex < bars.length; barIndex++) {
        const bar: Bar = bars[barIndex];

        for (let noteTime = 0; noteTime !== 1; noteTime += noteLength) {
            const linearTime: number = getLinearValue(noteTime);

            noteBeats.push({
                beat: bar[linearTime - 1] ?? { direction: 'pause' },
                symbol: linearTime % 1 === 0 ? String(linearTime) : (linearTime * 2) % 1 === 0 ? '&' : '',
            });
        }
    }

    return noteBeats;
}

export const getNoteClassByLength = (noteLength: number) => {
    switch (noteLength) {
        case 1/4:
            return 'quarter';
        case 1/8:
            return 'eight';
        case 1/16:
            return 'sixteen'
        default:
            return '';
    }
}