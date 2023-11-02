import { useState } from "react";
import img from "./assets/steve.jpg";
import "./App.css";
import Videos from "./Videos";

function App() {
  const videoData = [
    {
      video: "https://www.youtube.com/embed/jcFbGsl8DDI",
      description: "Steve Jobs' Vision of the World",
    },
    {
      video: "https://www.youtube.com/embed/upzKj-1HaKw",
      description: "Steve Jobs on Microsoft",
    },
    {
      video: "https://www.youtube.com/embed/5fI3zz2cp3k",
      description: "Steve Jobs on programming",
    },
  ];
  return (
    <>
      <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>
      <img src={img} alt="Steve Jobs holding a Macbook"></img>
      <p>
        Steve Jobs was teh co-founder and CEO of Apple INC. He is widely
        considered to be a brilliant businessman, as well as one of the greatest
        tech visionaries of our time.
      </p>
      <p>
        The story of his life is nothing short of fascinating. After dropping
        out of college, he started Apple with his friend{" "}
        <a href="https://en.wikipedia.org/wiki/Steve_Wozniak" target="_blank">
          Steve Wozniak
        </a>{" "}
        in 1976 at the age of 21.
      </p>{" "}
      The duo gained wealth and fame a year later for{" "}
      <a href="https://en.wikipedia.org/wiki/Apple_II" target="_blank">
        Apple II,
      </a>{" "}
      one of the first highly successful mass-produced personal computers. This
      was followed by the very successful Macintosh in 1984, the first
      mass-produced computer with a GUI (graphical user interface). After being
      ousted of Apple in 1985, he went on to oversee the creation of two new
      companies: NeXT computer and{" "}
      <a href="https://en.wikipedia.org/wiki/Pixar" target="_blank">
        Pixar.
      </a>{" "}
      With the success of the movie Toy Story, Steve became a billionaire.
      <p>
        In 1997, Steve returned to Apple. Bill Gates and Microsoft dominated the
        computer industry, and Apple was on the brink of extinction.
        Nonetheless,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Reality_distortion_field"
          target="_blank"
        >
          Steve was a fantastic salesman,
        </a>{" "}
        and used his business acument to slowly bring the company back to
        profitability.
      </p>
      <hr />
      <h1>Steve Job Resources</h1>
      <p>Apple's tribute to Steve Jobs:</p>
      <p>
        <a href="https://www.apple.com/stevejobs/" target="_blank">
          Remembering Steve
        </a>
      </p>
      <p>The Steve Jobs Biography</p>
      <p>
        <a
          href="https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537"
          target="_blank"
        >
          Steve Jobs
        </a>
      </p>
      <p>The Steve Jobs Movie</p>
      <p>
        <a href="https://www.imdb.com/title/tt2080374/">Steve Jobs on IMDB</a>
      </p>
      <hr />
      <h1>Check out these Steve Job's Videos</h1>
      <Videos videoData={videoData[0]} />
      <Videos videoData={videoData[1]} />
      <Videos videoData={videoData[2]} />
    </>
  );
}

export default App;
