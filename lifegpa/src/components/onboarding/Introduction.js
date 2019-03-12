import React from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="intro">
      <h2>Welcome to LifeGPA</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        aspernatur ad sint quis ipsa nam fuga aliquid tenetur provident atque
        necessitatibus illo dolorem hic impedit vitae molestiae, laudantium
        tempora quia?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus
        dolore excepturi aut facere cupiditate repellendus neque deserunt, ipsam
        voluptatibus. Optio vitae aliquam pariatur dignissimos. Magni neque
        beatae praesentium quia?
      </p>
      <Link to="/onboarding/categories">
        <button>Continue</button>
      </Link>
    </div>
  );
};

export default Introduction;
