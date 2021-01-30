import React from 'react'
import classes from './Searchbar.module.css';

const Searchbar = (props) => {
    return(
        <div className={classes.Searchbar}>
            <form className={classes.Searchbar} onSubmit={props.movieRequestHendler}>
                <input type="text" value={props.searchName} placeholder="Search" onChange={props.getSearchNameHendler}/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>

    )
}

export default Searchbar