import React from "react";

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
    onCange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
        return <div>
            <AccordionTitle title={props.titleValue}
            onCange={props.onCange}
            />{
            !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    }

type AccordionTitlePropsType = {
    title: string
    onCange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3 onClick={props.onCange}>{props.title}</h3>

}

type accordionBodyType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: accordionBodyType) {
    console.log("AccordionBody rendered")
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}