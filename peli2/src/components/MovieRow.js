import React from 'react';

const MovieRow = (props) => {

const title = props.movie.title;
const overview = props.movie.overview;
const posterUrl = "https://image.tmdb.org/t/p/w500"+props.movie.poster_path;
const id = props.movie.id;
   
return(     
        <table key={id}>
        <tbody>
          <tr>
            <td>
              <img   width="200" alt="poster" src={posterUrl}></img>
            </td>
            <td>
              <h3 style={{ height: '250px'}} >{title}</h3>
              <p>{overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
 );
};

export default MovieRow;