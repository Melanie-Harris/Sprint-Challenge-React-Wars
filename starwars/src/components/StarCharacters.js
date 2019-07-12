import React from 'react';
import './StarWars.css';

import { Card } from 'semantic-ui-react';

const StarCharacters = props => {
    console.log(props.character.url)
    return (
        <div>
            <Card color="blue" className="card"> 
                <Card.Content>
                    <Card.Header>{props.character.name}</Card.Header>
                    < Card.Meta> {props.character.birth_year} </Card.Meta>
                    <Card.Description> {props.character.gender} </Card.Description>
                </Card.Content>
            </Card>
        </div>

    )
}



export default StarCharacters;