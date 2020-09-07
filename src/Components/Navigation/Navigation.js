import React from 'react'
import Button from '../Button/Button'
import './Navigation.css';

import { Link } from 'react-router-dom'




function Navigation() {

    return (
        <nav className='navigation'>
            <section className='button-container'>
                <Link to="/main-page" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button label={'Home'}/>
                </Link>
                <Button label={'Options'}/>
                <Button label={'Help'}/>
                <Button label={'Bathroom'}/>
            </section>
        </nav>
        
    )
}

export default Navigation