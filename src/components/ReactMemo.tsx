import React from 'react';

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const User = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}

const ReactMemo = () => {
    return (
        <div>
            <Counter count={10}/>
            <User users={['Kate', 'Lera', 'Vlad']}/>
        </div>
    );
};

export default ReactMemo;