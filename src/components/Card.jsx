import React from 'react';
import star from '../images/star.png'

export default function Card({ item }) {

    //Just to have a unique attribute of each Card component,
    // in case I need it in the future
    const key = item.id;

    let badgeText;
    if (item.openSpots === 0){
        badgeText = 'SOLD OUT';
    } else if (item.location === 'ONLINE'){
        badgeText = 'ONLINE'
    }

    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className='card--photo' src={item.photo} alt='example' />

            <div className='card--info'>
                <img src={star} alt='star' className='card--star' />
                <span>{item.rating} -</span>
                <span className='gray'>({item.reviewCount}) -</span>
                <span className='gray'>{item.location}</span>
            </div>

            <p>{item.description}</p>
            <p className='card--price'><span className='bold'>From ${item.price}</span> / person</p>

        </div>
    );
}