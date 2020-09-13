import React from 'react';
import PropTypes from 'prop-types';

import "../Emoji/Emoji.css"
export const Emoji = props => (

  <section className="emoji-background">
    <span
        className={`emoji ${props.img}`}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {/* {props.symbol} */}
    </span>
  </section>
);

Emoji.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
 }

export default Emoji;