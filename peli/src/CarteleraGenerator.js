import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import MovieCard from './MovieCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  //  justifyContent: 'space-around',
  justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
},
  gridList: {
    width: '100%',
    height: 'auto',
  },

}));

function TitlebarGridList(props) {
    const classes = useStyles();
   
    console.log("hola desde carteleraGEN");  
    console.log(props.grilla);

    return (
      <div className={classes.root}>
        <GridList   className={classes.gridList}>
      
             {/* <MovieCard title={props.grilla[1]}/> */}
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
             <MovieCard/>
       
        </GridList>
      </div>
    );
  }
  export default TitlebarGridList;