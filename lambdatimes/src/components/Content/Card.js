import React from 'react';
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.hedline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.arrayOf(PropTypes.string)
}

export default Card;
