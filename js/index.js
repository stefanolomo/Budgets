//° |------------------------|
//° |		Index.js		 |
//° |------------------------|

//* Variables

let FormTitle = document.querySelector("main section.menu form input#title");
let FormQuant = document.querySelector("main section.menu form input#quant");
let FormPrice = document.querySelector("main section.menu form input#price");
let FormDate = document.querySelector("main section.menu form input#date"); // FormDate.valueAsDate.toLocaleDateString() '21/12/121'
let FormButton = document.querySelector(
	'main section.menu form button[type="submit"]'
);
let CardContainer = document.querySelector("main section.container");
let RemoveCardButton = document.querySelector(
	"main section.container .card .buttons button"
);

//* CreateCard Function
let CreateCard = () => {
	const template = `<div class="card">
	<div class="details">
		<b class="title">${EscapeHTML(FormTitle.value)}</b>
		<p class="quant"><b>Quantity:</b> ${EscapeHTML(FormQuant.value)}</p>
		<p class="price"><b>Price:</b> <code>$${EscapeHTML(FormPrice.value)}</code></p>
	</div>
	<div class="buttons">
	<button onclick="DeleteCard(this.parentElement.parentElement)">
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
		 class="bi bi-x-lg" viewBox="0 0 16 16">
		<path
			  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
	</svg>
</button>
	</div>
</div>`;
	if (
		(FormTitle.value !== "") &
		(FormPrice.value !== "") &
		(FormQuant.value !== "")
	) {
		console.log(FormTitle, FormPrice, FormQuant);
		CardContainer.insertAdjacentHTML("beforeend", template);
	} else {
		alert("The fields of title, price or quantity cant be empty!");
	}
};
let DeleteCard = (element) => {
	console.log(element);
	element.remove();
};

function EscapeHTML(str) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
//* CreateCard Event listener on submit button
FormButton.addEventListener("click", CreateCard);
