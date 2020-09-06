import React from 'react'
import Button from '../Button/button'
import './navigation.css';


function Navigation() {

    return (
        <nav className='navigation'>
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