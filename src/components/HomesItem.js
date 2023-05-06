import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function HomesItem({ home }) {
  //console.log(home);
  const [loveCount, setLoveCount] = useState(0);
  const [isLoved, setIsLoved] = useState(false);
  const [comment, setComment] = useState("");

  function handleLoveClick() {
    if (isLoved) {
      setLoveCount(loveCount - 1);
    } else {
      setLoveCount(loveCount + 1);
    }
    setIsLoved(!isLoved);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get("comment");
    setComment(comment); // Store the comment in state
  };
  return (
    <div className="homes-item">
      <div className="homes-item-images">
        {/* {home.images
          ? home.images.map((image, index) => (
              <img key={index} src={image} alt={` ${index + 1}`} />
            ))
          : null} */}
        {home && Array.isArray(home.images)
          ? home.images.map((image, index) => (
              <img key={index} src={image} alt={` ${index + 1}`} />
            ))
          : null}
      </div>
      <h2>{home.title}</h2>
      <p>Bedrooms: {home.bedrooms}</p>
      <p>Bathrooms: {home.bathrooms}</p>
      <p>Living Room: {home.livingroom ? "Yes" : "No"}</p>
      {/* Render the comment if there is one */}
      {comment && <p>{comment}</p>}
      <div className="homes-item-actions">
        <button
          className={`love-button ${isLoved ? "loved" : ""}`}
          onClick={handleLoveClick}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span className="love-count">{loveCount}</span>
        </button>
      </div>
      {/* Form to submit a comment */}
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" name="comment" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomesItem;