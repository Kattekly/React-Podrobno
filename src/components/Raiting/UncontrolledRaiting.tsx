import React, {useState} from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRaiting(props: RatingPropsType) {
    console.log("Rating rendered")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
  return props.selected ? <span onClick={UncontrolledRaiting}><b>star </b></span> : <span>star </span>
}