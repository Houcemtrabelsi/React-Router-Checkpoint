import React from "react";
import { Card } from "react-bootstrap";
import './MovieListe.css';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard({ title, description, posterUrl, rate }) {
  return (
    <div className="corp ">
      <Card style={{ width: "360px", height:"600px" ,backgroundColor:"white",margin:"20px"}}>
        <Card.Img variant="top" src={posterUrl} style={{ width: "350px", height:"350px" }} />
        <Card.Body >
          <Card.Title style={{ color:"red" ,fontSize:"25px" }}>{title}</Card.Title>
          <Link to={{pathname:`/description/${title}`, state:{description} }}>Read more...</Link>
          
          
          <StarRatingComponent value={rate}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
