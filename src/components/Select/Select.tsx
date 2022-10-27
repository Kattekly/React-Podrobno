import styles from "./Select.module.css"
import {KeyboardEvent, useEffect, useState} from "react";

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

type ItemType = {
    title: string
    value: any
}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElValue, setHoveredElValue] = useState(props.value)

    const TitleItems = props.items.find(t => t.value === props.value)
    const HoveredItems = props.items.find(t => t.value === hoveredElValue)

    useEffect(() => {
        setHoveredElValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElValue) {
                    if (props.items[i + 1]) {
                        props.onChange(props.items[i + 1].value)
                        break
                    }
                }
            }
        }
    }


    return (
        <>
            <div className={styles.select} onKeyUp={onKeyPress} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{TitleItems && TitleItems.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(el => <div onMouseEnter={() => {
                            setHoveredElValue(el.value)
                        }}
                                                    className={styles.item + " " + (HoveredItems === el ? styles.selected : "")}
                                                    key={el.value}
                                                    onClick={() => {
                                                        onItemClick(el.value)
                                                    }}>{el.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}
