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
	let sp1 = document.createElement("span");
	let sp2 = document.createElement("span");
	let sp3 = document.createElement("span");
	//! Pone las clases por defecto y la X y el boton de editar
	p.setAttribute('class', "item");
	sp1.innerText = nombre.value
	sp2.innerText = " Amount: " + cantidad.value + " "
	sp3.innerText = "Date: " + fecha.value + " "
	button.setAttribute('class', "item red");
	sp1.setAttribute("class", "name")
	sp2.setAttribute("class", "quant")
	sp3.setAttribute("class", "dat")
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
	if (select.options[select.selectedIndex].value == "Type"){
		h5.setAttribute('class', "item ingreso");
		h5.innerText = "Earned " + precio.value + "$"
	};
	//? Une todo con pegamento y lo envia al HTML
	newTask.append(section1)
	newTask.append(section2)
	p.append(sp1)
	p.append(sp2)
	p.append(sp3)
	section1.append(p)
	section2.append(h5)
	section2.append(button)
	seccion.append(newTask)
};