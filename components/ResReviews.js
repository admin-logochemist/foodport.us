import React from 'react'
import ReactStars from 'react-stars'
function ResReviews({obj}) {
    return (
        <div
        className="top_cards_item customer_cards"
      >
      <img src="img/carlitos-barbecue-tacqueria-catering-scaled.jpg" alt="" height={50} />
        <h3 className="top_cards_title" >
    Amos
          <br />
          <span className="top_cards_ddes">
            
          </span>
          <ReactStars
          count={5}
          size={24}
          value={obj.data().rating}
          color2={'#ffd700'} />
          <p>
        {obj.data().review}
        </p>
        </h3>
      
      </div>
     
    )
}

export default ResReviews
