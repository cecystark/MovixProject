import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MovieCard = (props) =>{
  return(
  <Card style={{ width: '18rem', margin:'10px'}}>
  <Card.Img variant="top" src="oferta.jpg" />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>);

};
export default MovieCard;
// class MovieCard extends Component{

//   render() { 
//     return (
//       <Card style={{ width: '18rem', margin:'10px'}}>
//       <Card.Img variant="top" src="oferta.jpg" />
//       <Card.Body>
//         <Card.Title>Mortal Kombat</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the bulk of
//           the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     );
//   }
// }

// export default MovieCard;