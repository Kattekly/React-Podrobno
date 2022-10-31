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

test('reducer collapsed2', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
    expect(newState.collapsed).toBe(false)
})

test('reducer collapsed3 error', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    expect( () => {
        reducer(state, {type: "FAKE"})
        }).toThrowError()
})