import React, { Component } from 'react'
import classes from './App.module.css';
import Navbar from './Components/Navbar/Navbar'
import MovieList from './Components/MovieList/MovieList'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  state = {
    searchName: "",
    allPages: 0,
    activePages: 0,
    movieList: [],
    url: {
      search: "https://api.themoviedb.org/3/search/movie?api_key=c3a9ed1f4ce1866fbfc09f806bf3beb5&query=",
    },
    searchInfo: {
      searched: false,
    }
  }

  getSearchNameHendler = e => {
    this.setState({
      searchName: e.target.value
    })
  }

  movieRequestHendler = async (value, e) => {
    e.preventDefault()
    const requestUrl = this.state.url.search + value.toLowerCase()

    try{
      const response = await axios.get(requestUrl)
      let sortData = []

      for(let movie of response.data.results) {
        if("https://image.tmdb.org/t/p/w400/" + movie.poster_path !== "https://image.tmdb.org/t/p/w400/null") {
          sortData.push(movie)
        }
      }

      this.setState({
        movieList: sortData,
        allPages: response.data.total_pages,
        activePages: response.data.page,
        requestName: this.state.searchName,
        searchName: "",
        searchInfo: {searched: true,
                     requestName: value},
      })
    }
    catch(err) {
      console.log(err)
    }
  }

  loadMoreHendler = async (value) => {
    const requestUrl = this.state.url.search + value.toLowerCase() + "&page=" + (this.state.activePages + 1)

    try{
      const response = await axios.get(requestUrl)
      let copyList = [...this.state.movieList]

      for(let movie of response.data.results) {
        if("https://image.tmdb.org/t/p/w400/" + movie.poster_path !== "https://image.tmdb.org/t/p/w400/null") {
          copyList.push(movie)
        }
      }
     
      this.setState({
        movieList: copyList,
        activePages: this.state.activePages + 1
      });
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
      <Navbar
       getSearchNameHendler={this.getSearchNameHendler}
       movieRequestHendler={(e) => this.movieRequestHendler(this.state.searchName, e)}
       searchName={this.state.searchName}
       />
      <MovieList 
      list={this.state.movieList}
      searched={this.state.searchInfo.searched}
      allPages={this.state.allPages}
      activePages={this.state.activePages}
      loadMoreHendler={() => this.loadMoreHendler(this.state.searchInfo.requestName)}
      />
      {/* <Switch>
        <Route>

        </Route>
        <Route>

        </Route>
        <Route>

        </Route>
        <Route>

        </Route>
      </Switch> */}
      </>
    );
  }
}

export default App;
