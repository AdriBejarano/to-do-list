import React from "react";
import { Myinput } from "./myinput";
import "../../styles/index.scss";

//create your first component
export function Home() {
	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="row">
					<div className="col-6">
						<h1 id="titulo">LISTA DE TAREAS</h1>
						<Myinput />
					</div>
					<div className="col-6">
						{/* CAMBIAR URL */}
						<img src="http://www.marketingsignals.com/wp-content/uploads/2017/07/to-do-list-monsters.gif" />
					</div>
				</div>
			</div>
		</div>
	);
}
