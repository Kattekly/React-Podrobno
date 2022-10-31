import {reducer, StateType} from "./Reducer";

test('reducer collapsed', () => {
    //data
const state: StateType = {
    collapsed: false
}

    //action
const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
   expect(newState.collapsed).toBe(true)
})