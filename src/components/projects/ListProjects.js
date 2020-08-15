import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition
            key={project._id}
            timeout={200}
            className="proyecto"
          >
            <Project
              project={project}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}

export default ListProjects
