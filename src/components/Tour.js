import React, { useState } from "react";

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <img src={image} alt={name} />

      <h4>{name}</h4>
      <h4>₹{price}</h4>

      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button  id={`tour-item-para-${id}`}onClick={() => setReadMore(!readMore)}>
          {readMore ? "See Less" : "Show More"}
        </button>
      </p>

      <button
  id={`delete-btn-${id}`}
  onClick={() => removeTour(id)}
>
  Remove
</button>

    </div>
  );
};

export default Tour;
