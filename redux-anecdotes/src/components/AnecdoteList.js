import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        padding: "2px 5px",
      }}
    >
      <p>{anecdote.content}</p>
      <p>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote.id)}>vote</button>
      </p>
    </div>
  );
};

const Anecdotes = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };

  const sortByVotes = (arr) => {
    return arr.sort((a, b) => a.votes < b.votes);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          margin: "10px 0",
        }}
      >
        {sortByVotes(anecdotes).map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={vote} />
        ))}
      </div>
    </div>
  );
};

export default Anecdotes;
