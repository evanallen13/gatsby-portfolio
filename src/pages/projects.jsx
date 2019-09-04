import React from 'react';
import Project from '../components/project/project'
import '../styles/projects.css'
import { graphql } from 'gatsby'
import Nav from '../components/nav/nav'

const Projects = ({data}) =>{
    return(
        <div className="projectPage" style={{textAlign:'center',margin:'0'}}>
          <h1 id="project_title">Projects</h1>
          <Nav
            btnColor = {'rgb(45, 93, 124)'}
            color = {'#f3f0e2'}
            page1 = {['/','Home']}
            page2 = {['/about','About']}
          ></Nav>
            <div className="d-flex flex-wrap justify-content-center">
                {
                  data.allMarkdownRemark.nodes.map((node) => (
                    <Project
                      key={node.frontmatter.title}
                      title={node.frontmatter.title}
                      image={node.frontmatter.img}
                      text={node.frontmatter.text}
                      git= {node.frontmatter.git}
                      hosting = {node.frontmatter.hosting}
                      skills = {node.frontmatter.skills}
                    ></Project>
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
          }
          html
        }
    }
  }
`
