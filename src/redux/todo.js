import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: []
}

const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state,action){
            state.items.push(action.payload) 
        }
    }
})

export const { addTodo } = todo.actions

export default todo.reducer