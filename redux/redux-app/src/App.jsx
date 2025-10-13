import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

const App = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Counter</h1>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
};

export default App;
