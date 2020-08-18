import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AlertContext from '../../context/alerts/alertContext'


const ListProjects = () => {


  const alertContext = useContext(AlertContext);

  const { alert, showAlert } = alertContext;

  // Extract projects from initial state
  const projectsContext = useContext(ProjectContext);
  const { message, projects, getProjects } = projectsContext;

  // Get projects, when loading the component
  useEffect(() => {
    if (message) {
      // if have a error
      showAlert(message.msg, message.category);
    }
    getProjects();
    // eslint-disable-next-line
  }, [message]);

  // Check if projects have content
  if (projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}

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
