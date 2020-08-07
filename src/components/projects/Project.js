import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {

  // Get the state of the projects

  const projectsContext = useContext(ProjectContext);
  const { currentProject } = projectsContext;


  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => currentProject(project.id)}
      >{project.name}</button>
    </li>
  )
}

export default Project
