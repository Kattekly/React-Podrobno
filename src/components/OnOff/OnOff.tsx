import React from 'react';
import s from "./OnOFF.module.css"

type  OnOffType = {
    call: boolean
}

const OnOff = (props: OnOffType) => {
    return (
        <div className={s.item}>
            <span className={s.on}> <button>On</button> </span>
            {props.call}
            <span className={s.off}> <button className={s.active}>Off</button> </span>
            {!props.call}
        </div>
    );
};

export default OnOff;