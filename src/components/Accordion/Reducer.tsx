type ActionType = {
    type: string
}

export let reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return !state
        default: return state
    }
    return state
}
