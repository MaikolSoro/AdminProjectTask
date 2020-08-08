import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContext';

const ListProjects = () => {

  // Extract projects from initial state
  const projectsContext = useContext(ProjectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects, when loading the component
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  // Check if projects have content
  if (projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
        />
      ))}
    </ul>
  )
}

export default ListProjects
