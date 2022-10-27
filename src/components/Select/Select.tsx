
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

type ItemType = {
    title: string
    value: any
}


export function Select (props: SelectPropsType) {
    const TitleItems = props.items.find(t => t.value === props.value)


return (
    <div>
        <h3>{TitleItems && TitleItems.title}</h3>
        {props.items.map(el => <div key={el.value}>{el.title}</div>)}
    </div>
)
}
