import {ArrowDirection} from "../../common/types";
import Arrows from './arrows';
import classNames from "classnames";
import './styles.css';

function Arrow({direction, isCurrent = false}: ArrowProps) {
    const arrows = {
        'top-down': Arrows.ArrowUpDown,
        'down-up': Arrows.ArrowDownUp,
        'muted': Arrows.ArrowMuted,
        'pause': () => <></>
    }

    const DirectionArrow = arrows[direction] ?? null;

    return (
        <div className={classNames(['arrow'], { current: isCurrent })}>
            <DirectionArrow />
        </div>
    )
}

type ArrowProps = {
    direction: ArrowDirection,
    isCurrent: boolean
}

export default Arrow;