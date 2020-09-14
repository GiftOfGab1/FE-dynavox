import React from 'react';
import PhrasePage from '../PhrasesPage/PhrasePage'
import "../Emoji/Emoji.css"
import { connect } from "react-redux"
import { store } from '../../index'
import { Route } from 'react-router-dom'


function Emoji ({ name }, props) {

    return (
      // <Link 
      // id={name}
      //   key={name} 
      //   to={`/subCategories-page/${name}`} 
      //   style={{ textDecoration: 'none', color: 'inherit' }}
      // >
        <section className="emoji-background">
          <span
            className={`emoji ${props.img}`}
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
      >
      </span>
    </section>
    // </Link> 
  )
};

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(Emoji);
