import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="jumbotron jumbotron-fluid bg-transparent text-center">
    <img src="https://drive.google.com/uc?export=view&id=1Cb-TkXBp4EqVq0aoD-wJr6MVhj8WU3GV" id="home_image" class="mx-auto align-top" />
    < div className="vw-50 vh-50 primary-color d-flex align-items-center justify-content-center" >
      <div className="container secondary-color">
        <h2 className="display-4">Food Recipes</h2>

        <p className="lead">
          A curated list of recipes for the best homemade meal and delicacies.
        </p>

        <hr className="my-4" />

        <Link to="/recipes" className="btn btn-lg custom-button" role="button">
          View Recipes
        </Link>

      </div>
    </div>
  </div >
);
