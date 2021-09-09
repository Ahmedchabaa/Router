import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

export const MovieScreen = ({movies}) => {
    const params=useParams();
    console.log(params);
        const movie = movies.find((el)=>el.id==params.id);
        console.log(movie);
    return ( 
        <div>
            <Container>
               <Row>
                   <Col><img style={{width:"100%"}} src={movie.posterurl} alt="poster" /></Col>
                   <Col className="nom">
                   <h1>{movie.name}</h1>
                   <p>{movie.description}</p>
                   </Col>
               </Row> 
            </Container>
        </div>
    )
}
export default MovieScreen;