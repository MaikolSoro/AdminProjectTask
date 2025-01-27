import React, { Fragment, useState, useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {

  // Get the state of the form

  const projectsContext = useContext(ProjectContext);
  const { form, errorform, showForm, AddProject, showError } = projectsContext;


  // state for project
  const [project, saveProject] = useState({
    name: ''
  })

  // Extract the project name
  const { name } = project

  // Read the contents of the input
  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  // when the user send a project
  const onSubmitProject = (e) => {
    e.preventDefault()

    // validate the project
    if (name === '') {
      showError()
      return;

    }
    // Add to state
    AddProject(project);
    // Restart the form
    saveProject({
      name: ''
    })
  }

  // Show the form
  const onClickForm = () => {
    showForm()
  }
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickForm}
      >
        Nuevo Proyecto
      </button>
      {
        form ? (

          <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
            <input
              type="text"
              className="input-text"
              placeholder="Nombre Proyecto"
              name="name"
              value={name}
              onChange={onChangeProject}
            />
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Agregar Proyecto"
            />
          </form>
        ) : null
      }
      {errorform ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
    </Fragment>
  )
}

export default NewProject
