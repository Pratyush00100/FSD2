import "./App.css";
import LocalStateCounter from "./components/CounterLocalState";
import CounterContextParent from "./components/CounterGlobalContextParent";
import CounterContextProvider from "./components/context/CounterGlobalContextAPI";
import CounterRedux from "./components/CounterRedux";
function App() {
  return (
    <>
      <h2>Experiment 4: To Demonstrate State Management</h2>

      <LocalStateCounter cno={1} />
      <LocalStateCounter cno={2} />

      <CounterContextProvider>
        <CounterContextParent cno="1" />
        <CounterContextParent cno="2" />
      </CounterContextProvider>

      <CounterRedux cno="1" />
      <CounterRedux cno="2" />
    </>
  );
}

export default App;
