import React from 'react';
import classes from './LoadButton.module.css'

const LoadButton = (props) => {
    return (
        <div className={classes.wrapper}>
            <button className={classes.LoadButton} onClick={props.loadMoreHendler}>Load more</button>
        </div>
    )
}
 
export default LoadButton;