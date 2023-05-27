import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [show, setshow] = useState();
  return (
    <div className="App">
      Hello world
      <button onClick={() => setshow(!show)}>{show ? "Show" : "Hide"}</button>
      {show ? (
        <p>
          Social media is the fastest-growing communication medium. Social media
          comprises the latest communication and social networking sites through
          the virtual medium of the internet. With the development of technology
          and different social media platforms, the world looks smaller.
          Nowadays, it isn’t easy to survive without social media. We need
          social media to connect with people. To get a better idea of social
          media and write a paragraph on the same, refer to the below-provided
          sample paragraphs on social media.
        </p>
      ) : null}
    </div>
  );
}

export default App;
