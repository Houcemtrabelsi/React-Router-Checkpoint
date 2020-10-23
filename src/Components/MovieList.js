import React,{useState} from "react";
import MovieCard from "./MovieCard";
import "./MovieListe.css";
import Modale from "./Modal"

function MovieList ({text,newRating})  {
  
    let [films, setFilms]= useState([
      {
        title: "Game of thrones",
        description: "Genre : Fantasy",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
        rate: "3",
      },
      {
        title: "Breaking bad",
        description:
          "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
        posterUrl:
          "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
        rate: "4",
      },
      {
        title: "hunter x hunter",
        description:
          "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
        posterUrl:
          "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
        rate: "5",
      },
      
    ],)
  


   let  addMovies=(newMovie)=>{
    setFilms(films => [...films, newMovie])
    console.log(newMovie)
  }
  
    return (
      <div>
      <div style={{ display: "flex", justifyItems: "space-between" }}>
        {films.filter(el=>el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()) && el.rate >= newRating).map((el) => (
          <MovieCard
            title={el.title}
            description={el.description}
            posterUrl={el.posterUrl}
            rate={el.rate}
          />
        ))}
        
      </div>
      
      <Modale addMovies={addMovies}/>
      
      </div>
    );
  }


export default MovieList;
