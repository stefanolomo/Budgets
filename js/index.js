let seccion = document.querySelector(".list")
function create(){
	let newTask = document.createElement("div");
	let section1 = document.createElement("section");
	let section2 = document.createElement("section");
	newTask.append(section1)
	newTask.append(section2)
	seccion.append(newTask)
};