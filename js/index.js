let seccion = document.querySelector(".list")
function create(){
	let newTask = document.createElement("div");
	let section1 = document.createElement("section");
	let section2 = document.createElement("section");
	let p = document.createElement("p");
	let h5 = document.createElement("h5");
	let button1 = document.createElement("button");
	let button2 = document.createElement("button");
	newTask.append(section1)
	newTask.append(section2)
	section1.append(p)
	section2.append(h5)
	section2.append(button1)
	section2.append(button2)
	seccion.append(newTask)
};