import { useContext, useMemo, useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { CountContext } from "./context";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("count re-render"); // This should never re-render as we are not updating any state here. But it will still update. This is the drawback of Context-API
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("re-rendering"); //Now if we are not using the useRecilState so the recoil knows that count is not being used. So it is not re-rendering. This is because when we were using count and setCount, Recoil new to count is changes so it was rerendering it "Because that change count value must be shown on the webpage"
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
