import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

function BabyHog(props) {
  const [weight, setWeight] = useState(props.weight);

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.name === "+") {
      setWeight((weight) => weight + 1);
    } else if (e.target.name === "-") {
      setWeight((weight) => weight - 1);
    }
  }

  let img;

  switch (props.eyeColor) {
    case "blue":
      img = BlueBaby;
      break;
    case "sun":
      img = SunBaby;
      break;
    case "glowing":
      img = GlowingBaby;
      break;
    default:
      img = normalBaby;
      break;
  }

  console.log(props);
  return (
    <li className="hogbabies">
      <h1>Name: {props.name}</h1>
      <h3>Weight:{weight} tons</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">
        Increase Weight
      </button>
      <button onClick={handleChangeWeight} name="-">
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img src={img} style={{ height: "200px" }} alt="MasterBlasterJrJr" />
      </div>
    </li>
  );
}

export default BabyHog;
