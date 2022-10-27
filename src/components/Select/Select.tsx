import {inspect} from "util";
import styles from "./Select.module.css"
import {useState} from "react";

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

type ItemType = {
    title: string
    value: any
}


export function Select (props: SelectPropsType) {
    const TitleItems = props.items.find(t => t.value === props.value)
const [active, setActiv] = useState(false)

return (
    <>
   {/*<select>
       <option value="">Minsk</option>
       <option value="">Moscow</option>
       <option value="">Kiev</option>
   </select>*/}

    <div className={styles.select + " " + styles.active}>
        <h3>{TitleItems && TitleItems.title}</h3>
        <div className={styles.items}>
        {props.items.map(el => <div key={el.value}>{el.title}</div>)}
        </div>
    </div>
    </>
)
}
