import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MovieCard = (props) =>{

const title = props.movie.title;
const overview = props.movie.overview;
const posterUrl = "https://image.tmdb.org/t/p/w500"+props.movie.poster_path;
const id = props.movie.id;

  return(
  <Card style={{ width: '250px', margin:'10px', display : 'inline-block'}}>
  <Card.Img variant="top" src={posterUrl} style={{ height: '250px'}}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>This should be a really short overview</Card.Text>
    <Button variant="primary">Más info!</Button>
  </Card.Body>
</Card>);
};
export default MovieCard;