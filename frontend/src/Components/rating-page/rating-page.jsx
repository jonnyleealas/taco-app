import { useState, React } from "react";
import "./rating-page.css";

function RatingPage() {
  const [rating, setRating] = useState(1);

  const handleSlide = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="rating-page-container">
      <div>
        <h1>Mcdonalds</h1>
        {rating}
      </div>
      <div>
        <input className="slider" type="range" min="1" max="10" step=".1" value={rating} onChange={handleSlide} />
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
