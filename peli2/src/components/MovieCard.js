import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import '../react-popupbox.css';
  
class MovieCard extends Component{
  openPopupbox(data) {
    const content = (

      <div>
        <div><h2 className="quotes">{data.title}</h2></div>
        <div className="row">
         <div className= "column">
           <Card.Img variant="top" src={data.posterUrl} style={{ height: '100%', width:'250px'}}/>
         </div>
        <div style={{ display:'inline-block', width:'300px', margin:'20px'}} className="quotes column">
            {data.overview} 
           <div><br/><br/>Original language: {data.language}</div>
           <div>Release Date: {data.releaseDate}</div>
           <div>Popularity: {data.popularity}</div>
           <div>ID: {data.id}</div>

        </div>
        </div>
      </div>

    
    )
    PopupboxManager.open({ content })
  }

  render(){

  const title = this.props.movie.title;
  let titleResume = title;
  let overview = this.props.movie.overview;
  let overviewResume = overview;
  const language= this.props.movie.original_language;
  const releaseDate = this.props.movie.release_date; 
  const popularity = this.props.movie.popularity;

  const posterUrl = "https://image.tmdb.org/t/p/w500"+this.props.movie.poster_path;
  const id = this.props.movie.id;
    
    const data = {
      title: titleResume,
      overview: overview,
      posterUrl: posterUrl,
      language: language,
      releaseDate: releaseDate,
      popularity: popularity,
      id: id,
    }

  if(titleResume.length>15)
  titleResume = `${titleResume.substr(0, 15)} ...`;

  if(overviewResume.length>64)
  overviewResume = `${overviewResume.substr(0, 64)} [...]`;

  return(
  <Card style={{ width: '250px', margin:'10px', display : 'inline-block'}}>
  <Card.Img variant="top" src={posterUrl} style={{ height: '250px'}}/>
  <Card.Body>
    <Card.Title title={title}>{titleResume}</Card.Title>
    <Card.Text style={{ height: '70px'}} >{overviewResume}</Card.Text>
   <div>
      <Button variant="primary" onClick={this.openPopupbox.bind(this,data)} style={{margin:'5%', widht:'40%', display : 'inline-block'}} >Más info!</Button>
      <Button variant="primary" style={{margin:'5%', widht:'40%', display : 'inline-block'}} >VOTA</Button>
      <PopupboxContainer/>
    </div>
  </Card.Body>
</Card>);
  }
};
export default MovieCard;