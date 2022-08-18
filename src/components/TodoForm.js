import { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
	const [input, setInput] = useState('');

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput('');
	};

	return (
		<>
			<div className="from">
				<form className="input_area" onSubmit={handleSubmit}>
					<input
						value={input}
						className="adding__input"
						type="text"
						placeholder=" Write here... "
						ref={inputRef}
						onChange={handleChange}
					/>
					<button type="submit">Push</button>
				</form>
			</div>
		</>
	);
};

export default TodoForm;
