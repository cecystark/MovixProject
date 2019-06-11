import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MovieRow from './components/MovieRow';
import DemoCarousel from './components/Carousel';
import MovieCard from './components/MovieCard';
import GrillaPeliculas from './components/GrillaPeliculas';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';



class App extends Component {
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

        const aux =[]

         theMovies.forEach((movie)=>{
         // const mov= <MovieRow key={movie.id} movie={movie}/>;
         const mov= <MovieCard key={movie.id} movie={movie}/>;
          aux.push(mov);
          
                    
          console.log("este es mov");
          console.log(mov);

          });

        //  const grilla = <GrillaPeliculas  tarjetas={aux} />;
      this.setState({rows: aux})
      //this.setState({rows: grilla})  
    })
  }
   
  render() {
  return(
    <div>
      <NavBar></NavBar>
      <DemoCarousel/>
      <div style={{height:'500px', paddingLeft:'100px'}}>{this.state.rows}</div>
    </div>
   );
  }
}
export default App;