import React from 'react';
// import './project.css'

const Project = (props) => {
    return(
        <div className='p-2' style={{ width: '22rem', margin:'0'}}>
            <h4 style={{margin:'0'}}>{props.title}</h4>
            <div>
                <img src={props.image} alt={props.image}></img>
                <button className="btn">Git</button>
                <button className="btn">Git</button>
                <div>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Project;