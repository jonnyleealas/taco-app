import { useState, React } from "react";
import "./rating-page.css";

function RatingPage() {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating-page-container">
      <div>
        <h1>Mcdonalds</h1>
      </div>
      <div>
        <input type="range" min="0" max="10" step=".1" value={rating} onChange={(e) => setRating(e.target.value)} />
      </div>
      <div>
        {rating}
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
