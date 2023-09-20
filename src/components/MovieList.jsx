import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";//1.3 importing Add Movie
import FilterMovies from "./FilterMovies";
 
function MovieList() {
    const [movies, setMovies] = useState(moviesDataJSON)
    const [moviesData, setMoviesData] = useState(moviesDataJSON);
   
//2.1 adding new movies in the list
    const addNewMovie = (movie) => {
        const updatedMovies = [...movies, movie];
        const updatedMoviesData = [...moviesData, movie];
        
        setMovies(updatedMovies);
        setMoviesData(updatedMoviesData);
      };
//2.1 

     const filterMovieList = (str) => {
     let filteredMovies;
    
     if (str === "All") {
      filteredMovies = moviesData;
     } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
     }
   
    setMovies(filteredMovies);
  };
  
      //1.3 rendering the addMovie
    return (
      <div>
        <FilterMovies filterMovies={filterMovieList}/>

        <AddMovie addMovie={addNewMovie}/> {/* <==  ADD HERE ! */}
        { movies.map(movie => {
          return <MovieCard key={movie._id} movie={movie} />;
        }) }
      </div>
    );
  } //1.3
 
export default MovieList;