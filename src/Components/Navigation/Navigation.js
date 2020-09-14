import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Navigation.css';
// import Phrase from '../Phrase/Phrase'




function Navigation() {

    return (
        <nav className='navigation'>
            <section className='button-container'>

                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button label={'Home'}/>
                    <p>Home</p>
                </Link>
                <Link to="/choose-voice" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button label={'Settings'}/>
                    <p>Options</p>
                </Link>  
                <section>
                  <Button label={'Help'}/> 
                  <p>Help</p>
                  </section>
                  <section>
                  <Button label={'Bathroom'}/><p>Bathroom</p>
                  </section>

            </section>
        </nav>
        
    )
}

export default Navigation