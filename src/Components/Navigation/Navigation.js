import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Navigation.css';





function Navigation() {

    return (
        <nav className='navigation'>
            <section className='button-container'>

                <Link to="/main-page" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button label={'Home'}/>
                    <p>Home</p>
                </Link>
                <Link to="/choose-voice" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button label={'Settings'}/>
                    <p>Options</p>
                </Link>  
                <Link  style={{ textDecoration: 'none', color: 'inherit' }}>                  
                  <Button label={'Help'}/>
                  <p>Help</p>
                </Link>
                <Link  style={{ textDecoration: 'none', color: 'inherit' }}>                  
                  <Button label={'Bathroom'}/><p>Bathroom</p>
                </Link>
            </section>
        </nav>
        
    )
}

export default Navigation