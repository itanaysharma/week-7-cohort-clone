import { useContext, useMemo, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  console.log("count re-render"); // This should never re-render as we are not updating any state here. But it will still update. This is the drawback of Context-API
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);

  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
