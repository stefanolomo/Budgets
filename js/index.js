seccion = document.querySelector(".list")
function create(){
	//! Crea Los elementos
	let newTask = document.createElement("div");
	let section1 = document.createElement("section");
	let section2 = document.createElement("section");
	let p = document.createElement("p");
	let h5 = document.createElement("h5");
	let button1 = document.createElement("button");
	let button2 = document.createElement("button");
	//! Pone las clases por defecto
	p.setAttribute('class', "item");
	h5.setAttribute('class', "item");
	button1.setAttribute('class', "item");
	button2.setAttribute('class', "item");
	//? Verifica si es gasto o ingreso y acomoda las clases en cada caso
	if (true){
	h5.setAttribute('class', "ingreso");
	}if (true){
		h5.setAttribute('class', "gasto");
	}

	newTask.append(section1)
	newTask.append(section2)
	section1.append(p)
	section2.append(h5)
	section2.append(button1)
	section2.append(button2)
	seccion.append(newTask)
};