import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data";

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("");

  const offspringArray = offspring.map((pig) => {
    return (
      <BabyHog
        key={pig.id}
        name={pig.name}
        hobby={pig.hobby}
        eyeColor={eyeColor}
        weight={pig.weight}
      />
    );
  });

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">{offspringArray}</ul>
    </div>
  );
}

export default HogBoss;
