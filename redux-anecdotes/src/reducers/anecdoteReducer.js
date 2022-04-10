import { createSlice } from "@reduxjs/toolkit";
import AnecdoteServices from "../services/anecdotes";

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    replaceAnecdote: (state, { payload }) =>
      state.map((anecdote) =>
        anecdote.id !== payload.id ? anecdote : payload
      ),
    appendAnecdote(state, { payload }) {
      state.push(payload);
    },
    setAnecdotes: (state, { payload }) => payload,
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const notes = await AnecdoteServices.getAll();
    dispatch(setAnecdotes(notes));
  };
};
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await AnecdoteServices.create(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};
export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes;
    const anecdote = anecdotes.find((n) => n.id === id);
    const payload = { ...anecdote, votes: anecdote.votes + 1 };
    const edited = await AnecdoteServices.edit({ id, payload });
    dispatch(replaceAnecdote(edited));
  };
};

export const { appendAnecdote, setAnecdotes, replaceAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
