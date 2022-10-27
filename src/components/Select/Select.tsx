
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

type ItemType = {
    title: string
    value: any
}


export function Select (props: SelectPropsType) {
    const TitleItems = (title: string, value: number) => {
    let newTitle = props.items.find(t => t.value === value)
       return  newTitle
}

return (
    <div>
        <div onChange={TitleItems}></div>
        {props.items.map(el => <div>{el.title}</div>)}
    </div>
)
}
