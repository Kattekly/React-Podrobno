import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

const Clock2 = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('setInt')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])


    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }


    return (
        <div>{view}</div>
    );
};

export default Clock2;


export type ClockViewPropsType = {
    date: Date
}