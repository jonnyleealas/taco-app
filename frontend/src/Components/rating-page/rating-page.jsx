import React from "react";
import "./rating-page.css";

function RatingPage() {
  return (
    <div className="rating-page-container">
      <div>
        <h1>Mcdonalds</h1>
      </div>
      <div>
        Rating
      </div>
      <div>
        <textarea placeholder="What did you like or dislike? What do you recommend?" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default RatingPage;
