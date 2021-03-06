import React, { Component } from 'react';
import DemoCarousel from '../components/movies/Carousel';
import MovieCard from '../components/movies/MovieCard';


class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows : []
    }
    
    this.performSearch();
  }

  performSearch() {
    const URL_SEARCH="https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&";
    const TERM_SEARCH="marvel"
    const API_KEY="8df71898c1e2a2a6370eedb649e88d1d";
    const API_SEARCH=`${URL_SEARCH}&api_key=${API_KEY}&query=${TERM_SEARCH}`;

    fetch(API_SEARCH)
    .then((response) => {
        return response.json()
      })
      .then((searchResults) => {

        const theMovies = searchResults.results; 
        console.log(theMovies);
        
        const aux =[]

         theMovies.forEach((movie)=>{

          const mov= <MovieCard key={movie.id} movie={movie}/>;
          aux.push(mov);
        
          });

          this.setState({rows: aux})
    })
  }
   
  render() {
  return(
    <div>
      <DemoCarousel/>
      <div style={{height:'500px', paddingLeft:'100px'}}>{this.state.rows}</div>
    </div>
   );
  }
}
export default Movies;