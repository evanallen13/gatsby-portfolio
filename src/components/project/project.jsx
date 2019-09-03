import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './project.css'

const Project = (props) => {
    return(
        <div className='p-2' style={{ width: '367px', margin:'0'}}>
            <h4 className='projectTitle' style={{margin:'0'}}>{props.title}</h4>
            <div>
                <img src={props.image} alt={props.image}></img>
                <div className='btnContainer'>
                    <div className="btn">
                            <a href={props.git} target="_blank" rel="noopener noreferrer"><img src="/header/github.png" alt="github"></img></a>
                    </div>
                    <div className="btn">
                            <a href={props.hosting} target="_blank" rel="noopener noreferrer"><img src="/header/eye.png" alt="hosting"></img></a>
                    </div>
                </div>
                    {
                        Array(props.skills).map((skill) =>
                            console.log(skill)
                            // <img src={skill} alt={skill} key={skill} ></img>
                        )
                    }
                <div>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Project;