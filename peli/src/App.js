import React, { Component } from 'react';
import './App.css';
import CarteleraGenerator from './CarteleraGenerator';

const url ="http://www.omdbapi.com/?i=tt3896198&apikey=";
const apiKEY="d0b64143";

class App extends Component{

  constructor ()
	{
		super();
		this.state = { 
			grilla : [],
    }	
    
		//linkear funciones
    console.log("invocarPeliculas()");
    this.invocarPeliculas();
	}

  invocarPeliculas()
  {
      const endpoint = `${url}${apiKEY}&s="galaxy"`;

      fetch(endpoint)
      .then ((response) => {
          return response.json();})
      .then (responseData => {

        console.log("leer api");
          var i,newArray = [];

          console.log("responseData");
          console.log(responseData);

          for (i = 0; i < responseData.Search.length; i++) {

            const {Title,Poster,Year}= responseData.Search[i];
            const newData = {titulo: Title, ano:Year , poster: Poster};

            newArray.push(newData);
          }
            
          
          console.log("setear estado");
          console.log(newArray);
          this.setState({grilla: newArray})

    });
  }
    
  render() { 
    return (
      <div className="App">
        <CarteleraGenerator grilla={this.state.grilla} />
      </div>
    );
  }
}

export default App;
