import React from 'react'
import classes from './Navbar.module.css';
import Searchbar from '../Searchbar/Searchbar'
import logo from '../../img/logo.png'

const Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <div className={classes.wrapper}>
                <img src={logo} className={classes.logo} alt=""/>
                <ul>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Top Rated</a></li>
                    <li><a href="">Upcoming</a></li>
                    <li><a href="">Latest</a></li>
                </ul>
                <Searchbar
                getSearchNameHendler={props.getSearchNameHendler}
                movieRequestHendler={props.movieRequestHendler}
                searchName={props.searchName}
                />
            </div>
        </div>
    )
}

export default Navbar