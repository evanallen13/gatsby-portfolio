import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './project.css'

const Project = (props) => {
    return(
        <div className='p-2' style={{ width: '367px', margin:'10px 10px 0px 10px'}}>
            <h4 className='projectTitle' style={{margin:'0'}}>{props.title}</h4>
            <div>
                <img className='projectImg' src={props.image} alt={props.image}></img>
                <div className='btnContainer'>
                    <div className="btn">
                            <a href={props.git} target="_blank" rel="noopener noreferrer"><img src="/header/github.png" alt="github"></img></a>
                    </div>
                    <div className="btn">
                            <a href={props.hosting} target="_blank" rel="noopener noreferrer"><img src="/header/eye.png" alt="hosting"></img></a>
                    </div>
                </div>
                <div className='skills'>
                    <img src={props.skill1} alt='skill'></img>
                    <img src={props.skill2} alt='skill'></img>
                    <img src={props.skill3} alt='skill'></img>
                    <img src={props.skill4} alt='skill'></img>
                </div>
                <div>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Project;