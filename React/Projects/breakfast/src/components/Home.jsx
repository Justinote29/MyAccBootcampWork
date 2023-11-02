import image from "../assets/image/fruit_on_toast.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to the Brunch Cafe Website</h1>

      <img src={image} alt="fruit on toast" />
      <h3>Our cafe serves the best food you will taste. We guarantee it!</h3>
      <p>
        The Brunch Cafe was established in 2001 with one goal in mind: to serve
        our customers the finest breakfast food in the world. It is our profound
        belief that food should be delivious and good for you.
      </p>
      <p>
        You want eggs? <strong>We got it.</strong> We promise that we'll never
        cut corners or compromise on quality. We are also extremely proud of our
        wide selection of pastries. Our chef wakes up every morning at 2AM to
        make our baked goods from scratch.{" "}
        <em>He literally sleeps only 3 or 4 hours a night!</em> With every bite
        into our croissants and muffins, you'll taste a difference that sets us
        apart from our competitors. Trust us, you'll never go anywhere else!
      </p>
      <p>
        If you're not completely satisfied with our food, you don't have to pay!
        (Just don't leave us a negative review on Yelp. Well sue.)
      </p>
      <p>
        If you would like to see the menu, click <Link to="/menu"> here.</Link>
      </p>
      <p>
        Making an order to go? if so, please click
        <Link to="/catering"> here.</Link>
      </p>
    </>
  );
};

export default Home;
