import React,{useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  let [newText, setText] = useState("");
  let [rating, setRating] = useState("");

  let filtredText=(text)=>{
    setText(text)
  }
  let filtredRating=(rating)=>{
    setRating(rating)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <Filter filtredText={filtredText} filtredRating={filtredRating}/>
        <MovieList text={newText} newRating={rating}/>
        
      </header>
    </div>
  );
}

export default App;
