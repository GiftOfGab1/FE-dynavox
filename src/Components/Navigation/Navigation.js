import React from 'react'
import Button from '../Button/Button'
import './Navigation.css';


function Navigation() {

    return (
        <nav className='navigation'>
            <h1 className='header'>Gift of Gab</h1>
            <section className='button-container'>
                <Button label={'Home'}/>
                <Button label={'Options'}/>
                <Button label={'Help'}/>
                <Button label={'Bathroom'}/>
            </section>
        </nav>
        
    )
}

export default Navigation