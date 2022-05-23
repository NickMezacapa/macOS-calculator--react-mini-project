import React from "react";
import DraggingCalc from "./Components/Dragging/Dragging";
import { BsGithub } from "react-icons/bs";
import "./App.css";

function App() {
	return (
		<div className="bodyContainer">
			<DraggingCalc />
			<h1>React iOS-macOS Inspired Calculator</h1>
			<p id="click">
				Click the button to launch the calculator. Drag anywhere on the screen.
			</p>
			<button
				id="button"
				onClick={(e) => {
					e.preventDefault();
					const dragging__div = document.querySelector(".Dragging");
					dragging__div.classList.toggle("Dragging_active");
				}}
			>
				Launch
			</button>

			<BsGithub
				className="githubIcon"
				size={32}
				color={"#fff"}
				onClick={(e) => {
					e.preventDefault();
					window.open(
						"https://github.com/NickMezacapa/macOS-calculator--react-mini-project",
						"_blank",
					);
				}}
			/>
		</div>
	);
}

export default App;
