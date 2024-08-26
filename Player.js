import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
    const ListGroup = {
        width: '18rem',
        margin: '10px'
    };


// bootstrap card

    return (
        
        <Card style={ListGroup}>
            <Card.Img variant="top" src={imageURL}  />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
                <Card.Text>Team: <strong>{team}</strong></Card.Text>
                <Card.Text>Nationality: <strong>{nationality}</strong></Card.Text>
                <Card.Text>Jersey Number: <strong>{jerseyNumber}</strong></Card.Text>
                <Card.Text>Age: <strong>{age}</strong></Card.Text>
        </Card.Body>
       
       



        
      </Card>
      
    );
  }


  Player.defaultProps = {
    name: 'Tyreek Hillr',
    team: 'NFL',
    nationality: 'American ',
    jerseyNumber: 10,
    age: 30,
    imageURL: 'https://playersbio.com/wp-content/uploads/2022/08/Tyreek-Hill.jpg',
  };









  export default Player