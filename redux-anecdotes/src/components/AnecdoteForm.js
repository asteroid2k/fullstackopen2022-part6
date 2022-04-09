import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    dispatch(createAnecdote(content));
  };

  return (
    <div style={{ margin: "15px 0" }}>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="anecdote"></label>
          <input id="anecdote" name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
