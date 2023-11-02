function Child(props) {
  //Here, we accept the name variable and the handleChange function sent as props from the parent component and set onChange attribute in the input to be equal to the handleChange function so it runs on every change to the input and set the value to be the name variable so we can use setName in the handleChange function to set the name to the value (what's entered) of the input.
  return (
    <>
      <input
        type="text"
        placeholder="Please Enter Your Name"
        onChange={props.handleChange}
        value={props.name}
      />
    </>
  );
}

export default Child;
