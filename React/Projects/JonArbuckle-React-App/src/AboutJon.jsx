import img from "./assets/jon.png";
const AboutJon = () => {
  return (
    <div>
      <br />
      <img
        src={img}
        alt="Jon Arbuckle looking depressed next to a smiling Garfield."
      />
      <br />
      <div className="intro">
        <p>
          Hi there everyone! My name is <u>Jon Arbuckle</u>. I am 30 years old
          and I am a cartoonist that lives in Muncie, Indiana. I am the prroud
          owner of a cat names <strong>Garfield</strong> and a dog named{" "}
          <strong>Odie</strong>. Garfield is fat, lazy and loves to eat, while
          Odie is a dog without a brain. Although my pets drive me
          <em>crazy</em>, I can't imagine life without them.
        </p>

        <p>
          I spend about half my time going to the grocery store to buy enough
          food to feed Garfield. I have to make sure to buy all of Garfield's
          favorite foods, or else he'll get grumpy. This includes milk, cheese,
          bread, ham, chicken wings, potatoe chips, pasta with marinara sauce,
          frozen pizzas, and <strong>lots and lots</strong> of lasanga. When I
          come home, Garfield usually attacks me and tries to eat everything in
          the grocery bag before I even have time to put it in the refrigerator.
          One time he ate everything that I bought in 30 seconds, and I had to
          go back to the store to buy more food.{" "}
          <em>I wasn't too happy about that.</em>
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default AboutJon;
