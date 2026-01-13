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

        {!readMore && (
          <button
            id={`see-more-${id}`}
            onClick={() => setReadMore(true)}
          >
            Show More
          </button>
        )}

        {readMore && (
          <button
            id={`see-less-${id}`}
            onClick={() => setReadMore(false)}
          >
            See Less
          </button>
        )}
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
