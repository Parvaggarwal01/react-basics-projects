import { useArray } from "./useArray";

const INITIAL_ARRAY = [1, 2, 3];
// const INITIAL_ARRAY = () => [1, 2, 3]

function App() {
  const { array, set, push, replace, filter, remove, clear, reset } =
    useArray(INITIAL_ARRAY);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "center",
          marginTop: "1rem",
          fontSize: "2vw",
        }}
      >
        {array.join(", ")}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "center",
          marginTop: "1rem",
          fontSize: "2vw",
        }}
      >
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "2vw",
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          onClick={() => set([4, 5, 6])}
        >
          Set to [4, 5, 6]
        </button>
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "2vw",
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          onClick={() => push(4)}
        >
          Push 4
        </button>
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "2vw",
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          onClick={() => replace(1, 9)}
        >
          Replace the second element with 9
        </button>
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "2vw",
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          onClick={() => filter((n) => n < 3)}
        >
          Keep numbers less than 3
        </button>
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "2vw",
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          onClick={() => remove(1)}
        >
          Remove second element
        </button>
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "2vw",
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          onClick={clear}
        >
          Clear
        </button>
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "2vw",
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
