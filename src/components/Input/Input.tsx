import React, {ChangeEvent, useRef, useState} from 'react';


// неконтролируемый инпут
export const UncontrolledInput = () => <input/>

// получить значение у неконтролируемого инпута
export const TrackUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <><input value={value} onChange={onChange
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

    return <><input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value} </>
};

//контролируемый инпут value={parentValue}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return < input value={parentValue} onChange={onChange}/>
}

//контролируемый чекбокс checked={parentValue}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return < input type="checkbox" checked={parentValue} onChange={onChange}/>

}

//контррлируемая менюшка с выбором
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined> ('')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Moscow</option>
    </select>

}