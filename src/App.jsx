import "./App.css";
// import the Greetings component
import Greetings from "./Greetings.jsx";

function App() {
  return (
    <>
      <h1>My First React App</h1>
      {/* Add Greetings component & 
      pass visitor's name as a prop */}
      <Greetings name="Monica" />
    </>
  );
}

export default App;
