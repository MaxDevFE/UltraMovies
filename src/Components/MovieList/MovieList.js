import React from 'react';
import classes from './MovieList.module.css'
import LoadButton from '../LoadButton/LoadButton'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = props => {
    return(
        <div>
            <div className={classes.MovieList}>
            {props.searched ?
                props.list.map((movie, index) => {
                    return <MovieCard movie={movie} key={index}/>
                }) : null
            }
            </div>
            {props.allPages !== props.activePages && props.list.length ? <LoadButton loadMoreHendler={props.loadMoreHendler} /> : null}
        </div>
    )
}
 
export default MovieList;