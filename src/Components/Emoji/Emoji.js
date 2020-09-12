import React from 'react';
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
export default Emoji;