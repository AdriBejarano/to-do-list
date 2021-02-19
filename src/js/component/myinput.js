import React, { useState } from "react";
import "../../styles/index.scss";

export const Myinput = () => {
	const [task, setTask] = useState([]);
	//const [arraytask, setArraytask] = useState([]);

	const inputValue = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			let data = e.target.value;
			setTask([...task, data]);
			e.target.value = "";
		}
	};
	const deleteValue = index => {
		let result = task.filter(function(e, i) {
			return i !== index;
		});
		setTask(result);
	};
	return (
		<div className="form-group">
			<label htmlFor="exampleInputEmail1"></label>
			<input
				type="text"
				className="form-control"
				id="exampleInputEmail1"
				placeholder="Ingrese aqui su tarea"
				aria-describedby="emailHelp"
				onKeyUp={inputValue}
			/>
			<ul className="list-group">
				{task.map((item, index) => {
					return (
						<div key={index} className="d-flex ">
							<li className="list-group-item">
								{item}
								<i
									className="fas fa-minus-circle"
									onClick={() => {
										deleteValue(index);
									}}></i>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
