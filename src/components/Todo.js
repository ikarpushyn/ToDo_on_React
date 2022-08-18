import React from 'react';
// import '../style.css';

function Todo({ todos, completeTodo, removeTodo }) {
	return todos.map((todo, index) => (
		<div className="wrapp" key={index + 1}>
			<ul className="list" key={index}>
				<li
					className={todo.isComplete ? ' list_item checked' : ' list_item unchecked'}
					key={todo.id}
					onClick={() => completeTodo(todo.id)}
				>
					{todo.text}
				</li>
				<div className="icons">
					<div onClick={() => removeTodo(todo.id)} className="delete-icon">
						✖
					</div>
				</div>
			</ul>
		</div>
	));
}

export default Todo;
