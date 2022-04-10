import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const { payload: content } = action;
      state.push({ content, id: getId(), votes: 0 });
    },
    voteAnecdote(state, action) {
      const { payload: id } = action;
      const index = state.findIndex((n) => n.id === id);
      state[index].votes++;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => action.payload,
  },
});

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
