import React, {useState} from 'react';
import Project from '../components/project/project'
import '../styles/projects.css'
import { graphql } from 'gatsby'
import Nav from '../components/nav/nav'
import js from'../../static/skills/js.png'
import react from '../../static/skills/react.png'
import gats from '../../static/skills/gatsby.png'

const Projects = ({data}) =>{
    const [ skill, setSkill ] = useState('')
    return(
        <div className="projectPage" style={{textAlign:'center',margin:'0'}}>
          <h1 id="project_title">Projects</h1>
          <Nav
            btnColor = {'rgb(45, 93, 124)'}
            color = {'#f3f0e2'}
            page1 = {['/','Home']}
            page2 = {['/about','About']}
          ></Nav>
            <h6>Choose Skill</h6>
            <div>
              <button className="allBtn" onClick={() => setSkill('')}>All</button>
              <img src={js} alt="js" onClick={() => setSkill('js')}></img>
              <img src={react} alt="react" onClick={() => setSkill('react')}></img>
              <img src={gats} alt="gatsby" onClick={() => setSkill('gatsby')}></img>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {
                  data.allMarkdownRemark.nodes.map((node) => (
                    (node.frontmatter.keywords.includes(skill) ? 
                      <Project
                        key={node.frontmatter.title}
                        title={node.frontmatter.title}
                        image={node.frontmatter.img}
                        text={node.frontmatter.text}
                        git= {node.frontmatter.git}
                        hosting = {node.frontmatter.hosting}
                        skill1 = {node.frontmatter.skill1}
                        skill2 = {node.frontmatter.skill2}
                        skill3 = {node.frontmatter.skill3}
                        skill4 = {node.frontmatter.skill4}
                    ></Project> : null
                    )
                  ))
                }
            </div>
        </div>
    )
} 

export default Projects

export const query = graphql`
{
    allMarkdownRemark {
        nodes {
          frontmatter {
            title
            img
            git
            hosting
            skills
            text
            skill1
            skill2
            skill3
            skill4
            keywords
          }
          html
        }
    }
  }
`
