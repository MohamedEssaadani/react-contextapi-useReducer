import { useStore } from "./store/Store";

function App() {
  // useStore => useContext() => get value of the Store Context
  const { logoColor } = useStore();

  return <h1 style={{ color: logoColor }}>React Context API & useReducer</h1>;
}

export default App;
