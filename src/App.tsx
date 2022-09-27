import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";
import OnOff from "./components/OnOff/OnOff";


function App() {
    console.log("App rendered")
    return (
        <div>
            <PageTitle title={"App component"} />
            <PageTitle title={"User"} />
            <PageTitle title={"My friend"} />
            Article 1
            <Raiting value={3} />
            <Accordion titleValue={"--Menu--"} collapsed={true} />
            <Accordion titleValue={"--Users--"} collapsed={false} />
            Article 2
            <Raiting value={0} />
            <Raiting value={1} />
            <Raiting value={2} />
            <Raiting value={3} />
            <Raiting value={4} />
            <Raiting value={5} />
<div>
    <OnOff />
    <OnOff />
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
