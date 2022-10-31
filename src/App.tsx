import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting, RatingValueType} from "./components/Raiting/Raiting";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/Raiting/UncontrolledRaiting";
import {
    ControlledCheckbox,
    ControlledInput, ControlledSelect,
    TrackRefUncontrolledInput,
    TrackUncontrolledInput
} from "./components/Input/Input";
import {Select} from "./components/Select/Select";


function App() {
    console.log("App rendered")

 /*   let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accardionCollapsed, setAccardionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [value, setValue] = useState('2')*/

    return (
        <div className={'App'}>
          {/*  <PageTitle title={"App component"}/>
            <PageTitle title={"User"}/>
            <PageTitle title={"My friend"}/>
            Article 1
            <Accordion titleValue={"--Menu--"} collapsed={accardionCollapsed} onCange={() => {
                setAccardionCollapsed(!accardionCollapsed)
            }}/>


            <Accordion titleValue={"--Menu--"} collapsed={accardionCollapsed} onCange={() => {
                setAccardionCollapsed(!accardionCollapsed)
            }} items={[{title: 'Kate', value: 1}, {title: "Pem", value: 2}]}
                       onClick={() => {
                           alert()
                       }}/>


            <Select onChange={setValue} value={value}
                    items={[{value: "1", title: "Minsk"}, {value: "2", title: "Kiev"}, {value: "3", title: "Moscow"}]}/>

            <Select onChange={setValue}
                    items={[{value: "1", title: "Minsk"}, {value: "2", title: "Kiev"}, {value: "3", title: "Moscow"}]}/>

            Article 2
            <Raiting value={ratingValue} onClick={setRatingValue}/>
            <Raiting value={ratingValue} onClick={setRatingValue}/>
            <div>
                <OnOff on={switchOn} onCange={(on) => {
                    setSwitchOn(on)
                }}/>

            </div>*/}

            <div>
                <UncontrolledAccordion titleValue={"--Menu--"}/>
                {/*<UncontrolledAccordion titleValue={"--Users--"}/>*/}
            </div>
{/*
            <div>
                <UncontrolledRaiting/>
            </div>
            <div><TrackUncontrolledInput/></div>
            <div><TrackRefUncontrolledInput/></div>
            <div><ControlledInput/></div>
            <div><ControlledCheckbox/></div>
            <div><ControlledSelect/></div>*/}
            {/*<div>
                <OnOff1 call={true}/>
            </div>
            <div>
                <OnOff1 call={false}/>
            </div>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}


export default App;
