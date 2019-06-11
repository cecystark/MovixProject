import React from 'react';
import '../myStyles.css';

const Banner = () => {

  return( 
      <div>    
        <table className="appBar">
          <tbody>
            <tr>
              <td>
                <img  width="100" alt="icono" src="popcorn.ico"></img>
              </td>
              <td>
                <h1>Movix!</h1>  
              </td>
            </tr>
          </tbody>
        </table>

        <input className="searchBar" placeholder="Buscá acá tu peli favorita ;)"/>
      </div>
   );
  };
  
  export default Banner;