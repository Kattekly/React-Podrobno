import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
    onCange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
        return <div>
            <AccordionTitle title={props.titleValue}
            onCange={props.onCange}
            />{
            !props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    console.log("AccordionBody rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}