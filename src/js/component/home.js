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
						<h1 id="titulo">To Do List</h1>
						<Myinput />
					</div>
					<div className="Imagen col-5">
						{/* CAMBIAR URL */}
						<img src="https://i.pinimg.com/originals/a1/41/08/a14108b5e5cd6aaa49801f3cd726adbd.gif" />
					</div>
				</div>
			</div>
		</div>
	);
}
