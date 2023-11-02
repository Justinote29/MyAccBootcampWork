import croissontsImage from "../assets/image/croissonts_jam.jpeg";
import pancakesImage from "../assets/image/pancakes.jpeg";
import wafflesImage from "../assets/image/waffles.jpeg";
import eggsImage from "../assets/image/eggsOnToast.jpeg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <h1>The Menu</h1>
      <table border="1">
        <tr>
          <th>Entree</th>
          <th>Description</th>
          <th>Picture</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Croissants and Jam</td>
          <td>
            One bite into our buttery, flakey croissants and you'll be instantly
            hooked. They're so light and fluffy, that you'll think you're biting
            into air. Comes with a side of strawberry or grape jam.
          </td>
          <td>
            <img
              src={croissontsImage}
              alt="croissants and jam"
              height="120"
              width="180"
            />
          </td>
          <td>$1.99</td>
        </tr>
        <tr>
          <td>Raspberry Pancakes</td>
          <td>
            Our Pancakes are like biting into soft pillows. The raspberries add
            a tart and tangy flavor to each bite. We recommend adding an
            excessive amount of maple syrup and butter
          </td>
          <td>
            <img
              src={pancakesImage}
              alt="Raspberry Pancakes"
              height="120"
              width="180"
            />
          </td>
          <td>$1.39</td>
        </tr>
        <tr>
          <td>Plain and Simple Waffles</td>
          <td>
            Looking for a classic favorite? Our waffles will brighten up any
            morning. Yes, we all hate waking up ealry in the morning, but our
            waffles will give you the strength to endure the rest of your day.
          </td>
          <td>
            <img src={wafflesImage} alt="waffles" height="120" width="180" />
          </td>
          <td>$1.00</td>
        </tr>
        <tr>
          <td>Eggs on toast</td>
          <td>
            Talk about a protein and carb overload! Two eggs, any way you like
            them on buttered toast. Simple and delicious.
          </td>
          <td>
            <img src={eggsImage} alt="eggs on toast" eight="120" width="180" />
          </td>
          <td>$3.00</td>
        </tr>
      </table>
      <br></br>
      To go back to the home page, click <Link to="/"> here.</Link>
      <br></br>
      <br></br>
      Are you interested in catering or ordering to go? If so, click{" "}
      <Link to="/catering.jsx"> here.</Link>
    </>
  );
};

export default Menu;
