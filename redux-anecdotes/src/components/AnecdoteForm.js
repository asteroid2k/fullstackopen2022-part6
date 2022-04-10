import { useDispatch } from "react-redux";
import { appendAnecdote } from "../reducers/anecdoteReducer";
import { removeNotif, setNotif } from "../reducers/notificationReducer";
import AnecdoteServices from "../services/anecdotes";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    newAnecdote(content);
    dispatch(setNotif("Anecdote added"));
    setTimeout(() => dispatch(removeNotif()), 3000);

    e.target.anecdote.value = "";
  };

  const newAnecdote = async (content) => {
    const newAnecdote = await AnecdoteServices.create(content);
    dispatch(appendAnecdote(newAnecdote));
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
