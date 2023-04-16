// Récupérer tous les boutons "Ajouter au panier"
const buttons = document.querySelectorAll("button");

// Initialiser le tableau de panier
let panier = [];

// Ajouter un écouteur d'événements à chaque bouton "Ajouter au panier"
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// Récupérer l'article parent
		const article = button.parentElement;

		// Récupérer le nom de l'article et le prix
		const nom = article.querySelector("h2").textContent;
		const prix = article.querySelector(".price").textContent;

		// Ajouter l'article au panier
		panier.push({ nom, prix });

		// Naviguer vers la page de panier
		window.location.href = "panier.html";
	});
});

// Afficher les articles dans le tableau de panier
const panierBody = document.getElementById("panier-body");
panier.forEach((article) => {
	const row = document.createElement("tr");
	row.innerHTML = `
		<td>${article.nom}</td>
		<td>${article.prix}</td>
	`;
	panierBody.appendChild(row);
});
