import { useReducer } from "react";
import "./App.css";
import { exerciseReducer } from "./reducers/exerciseReducer";

const App = () => {
  const [state, dispatch] = useReducer(exerciseReducer, {
    isDark: false,
    fSize: 16,
  });
  return (
    <div>
      <div
        style={{
          backgroundColor: state.isDark ? "black" : "white",
          padding: 20,
          border: "1px solid #191919",
          marginBottom: "16px",
        }}
      >
        <h1
          style={{
            color: state.isDark ? "white" : "black",
            fontSize: `${state.fSize}px`,
          }}
        >
          useReducer!
        </h1>
      </div>
      <button onClick={() => dispatch({ type: "mode" })}>
        Toggle Dark Mode
      </button>
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase Font Size
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrease Font Size
      </button>
    </div>
  );
};

export default App;
