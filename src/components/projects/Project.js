import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {

  // Get the state of the projects

  const projectsContext = useContext(ProjectContext);
  const { currentProject } = projectsContext;

  // Getting function from task context
  const tasksContext = useContext(taskContext)
  const { getTasks } = tasksContext;

  // Function to add current project

  const selectProject = id => {
    currentProject(id) // Set a current project
    getTasks(id) // Filter tasks, when clicked
  }
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project._id)}
      >{project.name}</button>
    </li>
  )
}

export default Project
