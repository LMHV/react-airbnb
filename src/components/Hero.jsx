import React from 'react';
import collage from '../images/collage.png'

export default function Hero() {


    return(
        <section className='hero'>
            <img className='hero--photo' src={collage} alt='collage'/>

            <h1 className='hero--header'>Online Experiences</h1>

            <p className='hero--text'>Join unique interactive activities led by one of a king hosts. All without leaving home.</p>
        </section>
    );
}