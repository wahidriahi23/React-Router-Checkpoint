import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
 const movie = movies.find((m) => m.id === id);


  return (
    <div style={{textAlign:'center' , paddingTop:'60px'}} >
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> <br/>

      <Link to="/" >
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDetail;
