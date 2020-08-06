import React from 'react'
import Project from './Project'

const ListProjects = () => {
  const projects = [
    { name: 'Tienda Virtual' },
    { name: 'Internet' },
    { name: 'Diseño de Sitio web' }
  ]
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project
          project={project}
        />
      ))}
    </ul>
  )
}

export default ListProjects
