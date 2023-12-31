import {useState, React} from "react";
import "./rating-page.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal/modal";

/**
 *  The RatingPage component
 * @return {component} the RatingPage component
 */
function RatingPage() {
  const [rating, setRating] = useState(1);
  const [wordRating, setWordRating] = useState(" ");
  const [openModal, setOpenModal] = useState(false);

  const handleSlide = (e) => {
    setRating(e.target.value);

    if (rating >= 1 && rating < 3) {
      setWordRating("stay away");
    }

    if (rating >= 3 && rating < 5) {
      setWordRating("it will keep you alive");
    }

    if (rating >= 5 && rating < 5.9) {
      setWordRating("average");
    }

    if (rating >= 6 && rating < 7) {
      setWordRating("pretty good");
    }

    if (rating >= 7 && rating <= 7.9) {
      setWordRating("above average");
    }

    if (rating >= 8 && rating <= 8.9) {
      setWordRating("excellent");
    }

    if (rating > 9) {
      setWordRating("life changing");
    }

    return wordRating;
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="ratingContainer">
      <div className="ratingPageHeader">
        <div className="taco-logo-container">
          <p className="taco-logo">Taco App 🌮 </p>
        </div>
        <div className="faUser">
          <FontAwesomeIcon icon={faUser} size="2x" className="fa-solid" />
        </div>
      </div>
      <div className="rating-page-container">
        <div className="rating-page">
          <div>
            <h1>Mcdonalds</h1>
            {rating}
          </div>
          <div>
            <input
              className="slider"
              type="range"
              min="1"
              max="10"
              step=".1"
              value={rating}
              onChange={handleSlide}
            />
          </div>
          <div>
            {wordRating}
          </div>
          <div className="text-area-container">
            <textarea
              placeholder="What did you like or dislike? What do you recommend?"
            />
          </div>
          <div className="photoButtonContainer">
            <h3>Attach Photos</h3>
            <button className="photoButton" type="button" onClick={handleModal}>
              <FontAwesomeIcon icon={faCamera} size="3x" className="fa-solid" />
            </button>
          </div>
          <div className="review-button-container">
            <button
              type="button"
              className="submitReviewButton"
            >
              Submit Review
            </button>
          </div>
        </div>
        <div className="Modal-Component">
          <Modal open={openModal} onClose={handleModalClose} />
        </div>
      </div>
    </div>
  );
}

export default RatingPage;
