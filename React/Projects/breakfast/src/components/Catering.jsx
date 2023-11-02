import { Link } from "react-router-dom";
("react");

const Catering = () => {
  return (
    <>
      <h1>Get in touch with us!</h1>
      <p>
        Please use this form to make online orders. Be sure to include your
        address, and we'll deliver to you within 24 hours!
      </p>
      <form>
        <p>
          <label htmlFor="firstname">First Name:</label>{" "}
        </p>
        <input type="text" placeholder="Bill" name="firstname" />
        <br></br>
        <p>
          <label for="lastname">Last Name:</label>
        </p>
        <input type="text" placeholder="Watterson" name="lastname" />
        <br></br>
        <br></br>
        <label htmlFor="email"></label>
        <input type="email" placeholder="Put email address here" name="email" />
        <br></br>
        <br></br>
        <label htmlFor="phonenumber"></label>
        <input type="number" placeholder="777-7777" name="phonenumber" />
        <br></br>
        <br></br>
        <label htmlFor="order"></label>
        <textarea
          name="order"
          id=""
          cols="30"
          rows="10"
          placeholder="What would you like to order?"
        ></textarea>
        <br></br>
        <label htmlFor="fries"></label>
        Would you like a side of fries?
        <br></br>
        <input type="radio" id="yes" name="fries" value="Yes" checked />
        Yes
        <br></br>
        <input type="radio" id="no" name="fries" value="No" />
        No
        <br></br>
        <input type="radio" id="surpriseMe" name="fries" value="surpriseMe" />
        Surprise me
        <br></br>
        <button>Submit</button>
      </form>
      <p>
        If you would like to go back to the home page, click{" "}
        <Link to="/catering"> here.</Link>
      </p>
      <p>
        To return to our Menu, click <Link to="/menu"> here.</Link>
      </p>
    </>
  );
};

export default Catering;
