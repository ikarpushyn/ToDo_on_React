import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
	// const [task, setTask] = useState('');
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('localTasks')) {
			const storedList = JSON.parse(localStorage.getItem('localTasks'));
			setTodos(storedList);
		}
	}, []);

	const addTodo = (todo) => {
		if (!todo.text) {
			alert('Write smth');
			return;
		}

		const newTodos = [...todos, todo];

		setTodos(newTodos);
		console.log(...todos);
		localStorage.setItem('localTasks', JSON.stringify([...todos, todo]));
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removedArr);
		localStorage.setItem('localTasks', JSON.stringify(removedArr));
	};

	const clearAll = (id) => {
		const removedAll = [...todos].filter((todo) => todo.id === id);

		setTodos(removedAll);
		localStorage.removeItem('localTasks');
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
