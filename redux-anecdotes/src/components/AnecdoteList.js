import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { removeNotif, setNotif } from "../reducers/notificationReducer";

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
        <button
          onClick={() =>
            handleVote({ id: anecdote.id, name: anecdote.content })
          }
        >
          vote
        </button>
      </p>
    </div>
  );
};

const AnecdoteList = () => {
  const filter = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((a) => a.content.includes(filter))
  );
  const dispatch = useDispatch();

  const vote = ({ id, name }) => {
    dispatch(voteAnecdote(id));
    const notif = `You voted  '${
      name.length > 40 ? name.substring(0, 40) + "..." : name
    }'`;
    dispatch(setNotif(notif));
    setTimeout(() => dispatch(removeNotif()), 3000);
  };

  const sortByVotes = (arr) => {
    return arr.map((a) => a).sort((a, b) => a.votes < b.votes);
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

export default AnecdoteList;
