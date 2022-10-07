import React, {useState} from 'react';
import s from "./OnOFF.module.css"

type  OnOffType = {
    //on: boolean
}

function UncontroledOnOff(props: OnOffType) {
    console.log('OnOff render')
   let [on, setOn] = useState(false);

    console.log('on: ' + on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return <div>
        <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
        <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
        <div style={indicatorStyle}></div>
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

export default UncontroledOnOff;