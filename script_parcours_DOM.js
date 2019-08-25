  //les nombres de d'element <p>
console.log("Le nombres de l' element de <p>")
let paragraph = document.getElementsByTagName("p"); // Tous les titres p
console.log(paragraph.length); // Affiche 59

// Affichage de la contenu de l 'id COUCOU'
console.log("Le contenu textuel de l'élément identifié par 'COUCOU'") 
console.log(document.getElementById("coucou").textContent);

//l'URL de la 3em <a> dans la page
console.log("L'URL de la <a>");
var url = document.getElementsByTagName("a");
var url3 = url[2]; // Tous les titres p
console.log(url3.href);

//nombre d' element qui comporte l'element "compte-moi"
console.log("nombre d'element qui comporte compte-moi");
let compteMoi =  document.getElementsByClassName("compte-moi");
console.log(compteMoi.length);

//le nombre de l'element de li qui comporte le classe compte-moi
console.log("le nombre de l'element de li qui comporte le 'compte-moi'");
var li = document.querySelectorAll("li.compte-moi");
console.log(li.length);

//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console
console.log("nombre de l('element de li qui situés dans le liste ordonnée qui comporte 'compte-moi'");
var liste = document.querySelectorAll("ol li.compte-moi");
console.log(liste.length);

// Questions7
console.log("Affichage de la li caché");
var affichage = document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0];
console.log(affichage);

