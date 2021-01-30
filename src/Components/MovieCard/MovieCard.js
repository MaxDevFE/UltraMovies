import React from 'react';
import classes from './MovieCard.module.css'

const MovieCard = (props) => {
    return ( 
        <div id={props.movie.id} className={classes.MovieCard}>
            <img src={"https://image.tmdb.org/t/p/w400/" + props.movie.poster_path} alt=""/>
            <p>{props.movie.title}</p>
            <p className={classes.year}>{props.movie.release_date.slice(0, 4)}</p>
            <div className={classes.vote}>{props.movie.vote_average}</div>
        </div>
    );
}
 
export default MovieCard;