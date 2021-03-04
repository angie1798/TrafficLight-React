import React, { useState } from "react";

export const Semaforo = () => {
	const [colorlight, setColorlight] = useState("");
	function red() {
		setColorlight("red");
	}
	function yellow() {
		setColorlight("yellow");
	}
	function green() {
		setColorlight("green");
	}

	return (
		<div>
			<div className="top"></div>
			<div className="contenedor">
				<div className="space"></div>
				<div
					className={
						"redlight" + (colorlight == "red" ? " glowr" : "")
					}
					onClick={red}></div>
				<div className="space"></div>
				<div
					className={
						"yellowlight" + (colorlight == "yellow" ? " glowy" : "")
					}
					onClick={yellow}></div>
				<div className="space"></div>
				<div
					className={
						"greenlight" + (colorlight == "green" ? " glowg" : "")
					}
					onClick={green}></div>
			</div>
		</div>
	);
};
