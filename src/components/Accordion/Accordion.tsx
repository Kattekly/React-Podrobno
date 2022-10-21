import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
    onCange: () => void
    items: Array<string>
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
        return <div>
            <AccordionTitle title={props.titleValue}
            onCange={props.onCange}
            />{
            !props.collapsed && <AccordionBody items={props.items}/>}
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
    items: Array<string>
}

function AccordionBody(props: accordionBodyType) {
    console.log("AccordionBody rendered")
    return <ul>
        {props.items.map(i => <li>{i}</li>)}
    </ul>
}