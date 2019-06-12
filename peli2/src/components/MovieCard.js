import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import '../react-popupbox.css';



//const MovieCard = (props) =>{
  
class MovieCard extends Component{
  openPopupbox() {
    const content = (
      <div>
        <p className="quotes">This should be the title</p>
        <p className="quotes">Dance like no one is watching.</p>
        <p className="quotes">And love like you've never been hurt.</p>
        <span className="quotes-from">― Mark Twain</span>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render(){

  const title = this.props.movie.title;
  let titleAux = title;
  let overview = this.props.movie.overview;

  const posterUrl = "https://image.tmdb.org/t/p/w500"+this.props.movie.poster_path;
  const id = this.props.movie.id;
    
    const data = {
      title: title,
      overview: overview,
    }

  if(titleAux.length>15)
  titleAux = `${titleAux.substr(0, 15)} ...`;

  if(overview.length>64)
  overview = `${overview.substr(0, 64)} [...]`;

  return(
  <Card style={{ width: '250px', margin:'10px', display : 'inline-block'}}>
  <Card.Img variant="top" src={posterUrl} style={{ height: '250px'}}/>
  <Card.Body>
    <Card.Title title={title}>{titleAux}</Card.Title>
    <Card.Text style={{ height: '70px'}} >{overview}</Card.Text>
   <div>
      <Button variant="primary" onClick={this.openPopupbox} style={{margin:'5%', widht:'40%', display : 'inline-block'}} >Más info!</Button>
      <Button variant="primary" style={{margin:'5%', widht:'40%', display : 'inline-block'}} >VOTA</Button>
      <PopupboxContainer/>
    </div>
  </Card.Body>
</Card>);
  }
};
export default MovieCard;