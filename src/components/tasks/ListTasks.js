import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {

	const tasks = [
		{ name: 'Eligir plataforma', state: true },
		{ name: 'Eligir Colores', state: false },
		{ name: 'Eligir Hosting', state: true },
	];

	return (
		<Fragment>
			<h2>Proyectos: </h2>
			<ul className="listado-tareas">
				{
					tasks.length === 0 ? (<li className="tarea"><p>No hay tareas</p></li>)
						:
						tasks.map(task => (
							<Task
								task={task}
							/>
						))
				}
			</ul>
			<button
				type="button"
				className="btn btn-primario"
			>Eliminar Proyectos &times;</button>
		</Fragment>

	);
}

export default ListTask;