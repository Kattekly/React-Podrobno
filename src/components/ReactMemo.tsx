import React, {useState} from 'react';

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    console.log("HEHEHELLO")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UserSecret)

export const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Kate', 'Lera', 'Vlad'])

    const addUser = () => {
       const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </div>
    );
};