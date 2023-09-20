// src/components/AddMovie.jsx

import { useState } from "react";

function AddMovie(props) {
    //1.creating controlled component
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);
  //1.

  //1.4  e.target.checked is a boolean value from the `checkbox` input
  const handleTitleInput = e => setTitle(e.target.value);
 
  const handleDirectorInput = e => setDirector(e.target.value);
 
  const handleRatingInput = e => setIMDBRating(e.target.value);
 
  const handleOscarsInput = e => setHasOscars(e.target.checked);
  //1.4

  //2.2 updating handleSubmit button
  const handleSubmit = (e) => { 
    e.preventDefault();
    const newMovie = { title,director, IMDBRating, hasOscars };
 
    console.log("Submitted: ", newMovie);
    props.addMovie(newMovie);

    // Reset the State
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  }
  //2.2 

//1. creating controlled component
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      {/* 1. creating controlled component */}

      {/* 1.2 Creating a form */}
      <form onSubmit={handleSubmit}>  
        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleTitleInput} //1.4
        />
        
  
        <label>Director: </label>
        <input 
            type="text" 
            name="director" 
            value={director} 
            onChange={handleDirectorInput} //1.4
        />
  
        <label>IMDB Rating: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={IMDBRating}
            onChange={handleRatingInput} //1.4
        />
  
        <label>Won Oscars: </label>
        <input 
            type="checkbox" 
            name="hasOscars" 
            checked={hasOscars} 
            onChange={handleOscarsInput} //1.4
        />
        
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
 
}

export default AddMovie;
