import React, {useEffect, useState} from 'react';

type PropsType = {
    mode: 'digital' | 'analog'
}


const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    const stringTime = new Intl.DateTimeFormat('ru', {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).format(date)


    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('setInt')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    return (
        <div>
            <strong>{stringTime}</strong>
        </div>
    );
};

export default Clock;
