import React, {useEffect, useState} from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date())

    const stringTime = new Intl.DateTimeFormat('ru', {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).format(date)


    useEffect( () => {
         setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <div>
            <strong>{stringTime}</strong>
        </div>
    );
};

export default Clock;
