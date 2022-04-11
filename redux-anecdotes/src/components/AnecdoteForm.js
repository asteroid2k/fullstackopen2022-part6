import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    createAnecdote(content);
    setNotification("Anecdote added", 5);

    e.target.anecdote.value = "";
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;
