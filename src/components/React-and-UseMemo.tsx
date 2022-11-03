import React, {useMemo, useState} from "react";

const UserSecret = (props: { users: Array<string> }) => {
    console.log("HEHEHELLO")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UserSecret)

export const HelpReactMemo = () => {
    console.log("Help")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Kate', 'Lera', 'Vlad', 'Sem'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])


    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add</button>
            {counter}
            <Users users={newArray}/>
        </div>
    );
};