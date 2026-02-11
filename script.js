// Sélection depuis le menu
function choisirProduit(type) {
    document.getElementById("produit").value = type;
    calculerTotal();

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

// Calcul du total
function calculerTotal() {
    const produit = document.getElementById("produit").value;
    const quantite = document.getElementById("quantite").value;
    let prix = 0;

    if (produit === "simple") prix = 100;
    if (produit === "chocolat") prix = 150;

    document.getElementById("total").innerText = prix * quantite;
}

// Envoi commande
function envoyerCommande(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const tel = document.getElementById("telephone").value.trim();
    const produit = document.getElementById("produit").value;
    const quantite = document.getElementById("quantite").value;
    const total = document.getElementById("total").innerText;

    if (!nom || !tel || !produit) {
        alert("Remplis tous les champs.");
        return;
    }

    const produitTexte =
        produit === "simple" ? "Crêpe Simple" : "Crêpe Chocolat";

    const message =
`🥞 NOUVELLE COMMANDE - JO.crêpe
Nom : ${nom}
Téléphone : ${tel}
Produit : ${produitTexte}
Quantité : ${quantite}
Total : ${total} FCFA`;

    const whatsapp =
        "https://wa.me/242066256368?text=" + encodeURIComponent(message);

    window.open(whatsapp, "_blank");
}

/* MICRO-ANIMATIONS */

// Logo respiration
const logo = document.querySelector(".logo");
setInterval(() => {
    logo.style.transform = "scale(1.03)";
    setTimeout(() => logo.style.transform = "scale(1)", 1200);
}, 4000);

// Apparition des cartes
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";
    observer.observe(card);
});
