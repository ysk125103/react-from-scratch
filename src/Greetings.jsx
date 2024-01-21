// Define a new component as a function.
// The argument 'props' is a dictionary that
// contains the inputs to the component.
function Greetings(props) {
  return (
    //  Get visitor's name from 'props'
    // and render the welcome message
    <h2>Hello, {props.name}!</h2>
  );
}

export default Greetings;
