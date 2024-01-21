import "./App.css";
// import the Greetings component
import Greetings from "./Greetings.jsx";

function App() {
  return (
    // Add Greetings component &
    // pass visitor's name as a prop
    <>
      <h1>My First React App</h1>
      <Greetings name="Monica" />
    </>
  );
}

export default App;
