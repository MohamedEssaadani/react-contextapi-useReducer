import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import { useStore } from "./store/Store";

function App() {
  // useStore => useContext() => get value of the Store Context
  const { logoColor } = useStore();

  return (
    <div className="App">
      <h1 style={{ color: logoColor }}>React Context API & useReducer</h1>
      <h3>Booking System</h3>
      <BookingForm />
      <hr />
      <h4>Booking List</h4>
      <BookingList />
    </div>
  );
}

export default App;
