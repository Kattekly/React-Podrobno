type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

export let reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            return stateCopy
        default: return state
    }
    return state
}
