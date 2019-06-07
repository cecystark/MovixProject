import React, { Component } from 'react';
import './App.css';
import BuscarPeliculas from './components/BuscarPeliculas';
import GrillaPeliculas from './components/GrillaPeliculas';


 
class App extends Component 
{
 
	constructor ()
	{
		super();
		this.state = { 
			grilla : [],
			cajaTexto : "",
		}	
		//linkear funciones
		this.ejecutarBusqueda = this.ejecutarBusqueda.bind(this);
		this.okBusquedaPeli = this.okBusquedaPeli.bind(this);
		this.failBusqueda = this.failBusqueda.bind(this);
		this.actualizarTitulo = this.actualizarTitulo.bind(this);
	}

	componentDidMount()
	{
		BuscarPeliculas.invocarPeliculas("Toy",this.okBusquedaPeli,this.failBusqueda);
	}
	actualizarTitulo(nuevoTitulo)
	{
		this.setState({cajaTexto : nuevoTitulo.target.value});
	}

	
	ejecutarBusqueda()
	{
		console.log("entre a buscar");
		BuscarPeliculas.invocarPeliculas(this.state.cajaTexto,this.okBusquedaPeli,this.failBusqueda);
		
	}
	okBusquedaPeli(newData)
	{
		console.log("newData peli",newData);
		this.setState({grilla : newData});
	}
	

	failBusqueda(newData)
	{
		this.setState ({data : 'noData'});
	}
	render() 
	{
		
		return (
			
		<div className="App">
		<h1>Buscar Peliculas</h1>
		<form>
			<h4>Ingrese titulo de pelicula a buscar</h4>
			<input type="text" value = {this.state.cajaTexto} placeholder="Ingrese titulo..." onChange={this.actualizarTitulo}></input>
			<button type="button" onClick={this.ejecutarBusqueda}>Buscar pelicula</button>
				 
			<GrillaPeliculas grilla={this.state.grilla}></GrillaPeliculas>

		</form>
	 
	</div>
		);
	}


}
export default App;
