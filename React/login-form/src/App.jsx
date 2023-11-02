import "./App.css";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  //function that changes the state.  toggles from false to true.
  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  //setting value of password to what is typed in (the event.target.value) the password field.
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  //changes type from text to password based on showPassword state with ternary operators
  return (
    <form className="form">
      <input type="email" id="email" placeholder="Enter your email" />
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Enter your password"
        onChange={passwordChangeHandler}
      />

      <input
        name="checkbox"
        type="checkbox"
        checked={showPassword}
        onChange={handlePasswordShow}
      />
      <label htmlFor="checkbox">Show password</label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
