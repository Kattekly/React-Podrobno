import React from 'react';
import s from "./OnOFF.module.css"

type  OnOffType = {
    call: boolean
}

const onStyle = {}
const onStyle = {}

function OnOff(props: OnOffType) {
    return <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

/*
const OnOff = (props: OnOffType) => {
    return (
        <div className={s.item}>
            <span className={s.on}> <button>On</button> </span>
            <span className={s.off}> <button>Off</button> </span>
        </div>
    );
};

export const OnOff1 = (props: OnOffType) => {
    if (props.call === true)
    return (
<div className={s.item}>
<span className={s.on}> <button>On</button> </span>
<span> <button>Off</button> </span>
<span className={s.circle1}> <button></button> </span>
</div>)

    else {
        return <div className={s.item}>
            <span> <button>On</button> </span>
            <span className={s.off}> <button>Off</button> </span>
            <span className={s.circle2}> <button></button> </span>
        </div>
    }
}*/

export default OnOff;