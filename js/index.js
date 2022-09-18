let seccion = document.querySelector(".list");
let select = document.querySelector(".tipo");
let nombre = document.querySelector("#nombre");
let cantidad = document.querySelector("#cantidad");
let fecha = document.querySelector("#fecha");
let precio = document.querySelector("#precio");
function create(){
	//! Crea Los elementos
	let newTask = document.createElement("div");
	let section1 = document.createElement("section");
	let section2 = document.createElement("section");
	let p = document.createElement("p");
	let h5 = document.createElement("h5");
	let button = document.createElement("button");
	//! Pone las clases por defecto y la X y el boton de editar
	p.setAttribute('class', "item");
	button.setAttribute('class', "item red");
	button.innerText = "X"
	//? Verifica si es gasto o ingreso y acomoda las clases en cada caso
	if (select.options[select.selectedIndex].value == "ingreso"){
		h5.setAttribute('class', "item ingreso");
		h5.innerText = "Earned " + precio.value + "$"
	};
	if (select.options[select.selectedIndex].value == "gasto"){
		h5.setAttribute('class', "item gasto");
		h5.innerText = "Spent " + precio.value + "$"
	};
	newTask.append(section1)
	newTask.append(section2)
	section1.append(p)
	section2.append(h5)
	section2.append(button)
	seccion.append(newTask)
};