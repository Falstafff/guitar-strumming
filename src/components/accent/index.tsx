import {AccentStrength} from "../../common/types";
import classNames from "classnames";
import './styles.css';

function Accent({ strength, isCurrent = false }: { strength: AccentStrength, isCurrent: boolean }) {
    const classes = classNames(['accent'], { current: isCurrent });

    return (
        <div className={classes}>
            {strength === 'high' ? '>' : ''}
        </div>
    )
}

export default Accent;