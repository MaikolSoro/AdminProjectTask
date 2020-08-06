import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {

	const tasks = [
		{ name: 'Eligir plataforma', estado: true },
		{ name: 'Eligir Colores', estado: false },
		{ name: 'Eligir Hosting', estado: true },
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
		</Fragment>

	);
}

export default ListTask;