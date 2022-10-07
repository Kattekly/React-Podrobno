import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting, RatingValueType} from "./components/Raiting/Raiting";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/Raiting/UncontrolledRaiting";


function App() {
    console.log("App rendered")

    let[ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let[accardionCollapsed, setAccardionCollapsed] = useState<boolean>(true)


    return (
        <div className={'App'}>
            <PageTitle title={"App component"} />
            <PageTitle title={"User"} />
            <PageTitle title={"My friend"} />
            Article 1
            <Accordion titleValue={"--Menu--"} collapsed={accardionCollapsed} onCange={() => {setAccardionCollapsed(!accardionCollapsed)}}/>

            Article 2
            <Raiting value={ratingValue} onClick={setRatingValue}/>
            <Raiting value={ratingValue} onClick={setRatingValue}/>
<div>
    <OnOff />
    <OnOff />
</div>

            <div>
                <UncontrolledAccordion titleValue={"--Menu--"} />
                <UncontrolledAccordion titleValue={"--Users--"} />
            </div>

            <div>
                <UncontrolledRaiting />
            </div>
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
