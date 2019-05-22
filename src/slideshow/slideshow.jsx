import React from 'react'
// import cx from 'classnames';
// import styles from './slideshow.module.scss';

export function Slideshow({ images }) {
    return (
        <div>
            { images.map(img => <img src={img} alt="test" /> ) }
        </div>
    )
}


export default Slideshow;