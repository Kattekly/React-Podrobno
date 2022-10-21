import React, {ChangeEvent, useRef, useState} from 'react';


// неконтролируемый инпут
export const UncontrolledInput = () => <input/>

// получить значение у неконтролируемого инпута
export const TrackUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)}

    return <><input value={value} onChange={ onChange
       }/> - {value} </>
};

//значение неконтрол. импута через ref/ сохранить кнопкой
export const TrackRefUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input  ref={inputRef} /> <button onClick={save}>Save</button> - actual value: {value} </>
};

//контролируемый инпут
export const ControlledInput = () => {

}

export const ControlledCheckbox = () => {

}

export const ControlledSelect = () => {

}