import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text) {
			alert('Write smth');
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
		console.log(...todos, newTodos);
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removedArr);
	};

	const clearAll = (id) => {
		const removedAll = [...todos].filter((todo) => todo.id === id);

		setTodos(removedAll);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div>
			<h2>My To Do List</h2>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
			<button className="Clear" onClick={clearAll}>
				Clear All ✖
			</button>
		</div>
	);
}

export default TodoList;
