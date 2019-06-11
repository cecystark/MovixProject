import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MovieCard = (props) =>{

const title = props.movie.title;
let titleAux = title;
let overview = props.movie.overview;

const posterUrl = "https://image.tmdb.org/t/p/w500"+props.movie.poster_path;
const id = props.movie.id;


if(titleAux.length>15)
titleAux = `${titleAux.substr(0, 15)} ...`;

if(overview.length>64)
overview = `${overview.substr(0, 64)} [...]`;


  return(
  <Card style={{ width: '250px', margin:'10px', display : 'inline-block'}}>
  <Card.Img variant="top" src={posterUrl} style={{ height: '250px'}}/>
  <Card.Body>
    <Card.Title title={title}>{titleAux}</Card.Title>
    <Card.Text style={{ height: '100px'}} >{overview}</Card.Text>
    <Button variant="primary">Más info!</Button>
  </Card.Body>
</Card>);
};
export default MovieCard;