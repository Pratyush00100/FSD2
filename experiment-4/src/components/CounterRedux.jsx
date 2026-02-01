import { useDispatch, useSelector } from "react-redux";

function CounterRedux({ cno }) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{cno} : Global State (Redux) Count: {count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREASE
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        DECREASE
      </button>
    </div>
  );
}

export default CounterRedux;
