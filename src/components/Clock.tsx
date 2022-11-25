import React, {useEffect, useState} from 'react';

const Clock = () => {
   function restoreState<T>(key: string, defaultState: T) {
        let state = defaultState
        const stateAsString = localStorage.getItem(key)
        if (stateAsString !== null) state = JSON.parse(stateAsString) as T
        return state
    }
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const stringTime = new Intl.DateTimeFormat('ru', {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).format(date)


    useEffect( () => {
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
    })


    return (
        <div>
            <strong>{stringTime}</strong>
        </div>
    );
};

export default Clock;