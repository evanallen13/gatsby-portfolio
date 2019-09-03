import React from 'react';
import {Card, Button, Col} from 'react-Bootstrap'
// import './project.css'

const Project = (props) => {
    return(
        <div className='p-2' style={{ width: '22rem', margin:'0'}}>
            <h4 style={{margin:'0'}}>{props.title}</h4>
            <Card.Body>
                <img src={props.image} alt={props.image}></img>
                <Button className="btn">Git</Button>
                <Button className="btn">Hosting</Button>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </div>
    )
}

export default Project;