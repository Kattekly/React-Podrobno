import React, {useState} from 'react';

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const User = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

export const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Kate', 'Lera', 'Vlad'])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <Counter count={counter}/>
            <User users={users}/>
        </div>
    );
};