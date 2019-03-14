import React from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="intro">
      <h2>Welcome to LifeGPA</h2>
      <p>
        During the registering process, you will fill out a couple of categories
        and then a few habits that you wish to complete on a daily basis.
      </p>
      <p>
        After selecting your categories and habits, get ready to change your
        life!
      </p>
      <Link to="/onboarding/categories">
        <button className="continue">Continue</button>
      </Link>
    </div>
  );
};

export default Introduction;
