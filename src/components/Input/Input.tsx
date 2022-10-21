import React, {useRef, useState} from 'react';


// неконтролируемый инпут
export const UncontrolledInput = () => <input/>

// получить значение у неконтролируемого инпута
export const TrackUncontrolledInput = () => {

    const [value, setValue] = useState('')

    return <><input onChange={(e)=> {
           const actualValue = e.currentTarget.value
           setValue(actualValue)
       }}/> - {value} </>
};

//значение ноконтролю импута через ref
export const TrackRefUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} id={'inputId'}/> <button onClick={save}>Save</button> - actual value: {value} </>
};