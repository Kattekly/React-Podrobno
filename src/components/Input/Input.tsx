import React, {useState} from 'react';


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
