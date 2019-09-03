import React from 'react';
import Project from '../components/project/project'
import '../styles/projects.css'
import { Container} from 'react-bootstrap'

const Projects = ({data}) =>{
    return(
        <div className="projectPage" style={{textAlign:'center',margin:'0'}}>
          <h1 id="project_title">Projects</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {
                  data.allMarkdownRemark.nodes.map((node) => (
                    <Project
                      key={node.frontmatter.title}
                      title={node.frontmatter.title}
                      image={node.frontmatter.img}
                      text={node.frontmatter.text}
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
