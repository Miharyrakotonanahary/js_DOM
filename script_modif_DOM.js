console.log("aaaaaaaaaaaaaa");
//Modification 1
function changetitle(){
var  title_modif = document.getElementsByTagName("h1")[0];
title_modif.innerHTML = "Ce que j'ai appris à THP";
var text_modif = document.querySelectorAll("p.lead ")[0];
text_modif.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changetitle();

//modification 2
function changeCallToActions(){
/*Changer le texte du bouton "Main call to action" en "OK je veux tester !"
Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"*/
var bouton_modif = document.querySelectorAll("a.btn")[0];
bouton_modif.innerHTML = "OK je veux tester !";
bouton_modif.href="http://www.thehackingproject.org";
/*Changer le texte du bouton "Secondary action" en "Non Merci"
Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"*/
var bouton2_modif = document.querySelectorAll("a.btn")[1];
bouton2_modif.innerHTML = "Nom merci";
bouton2_modif.href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions()
//modification 3

function changeLogoName() {
//Change "Album" par "The THP Experience" 
var  album = document.getElementsByTagName("strong")[0];
album.innerHTML = "The THP Experience";	
//Change la taille du texte pour le passer en 2em.
album.style.fontSize = "2em";
}
changeLogoName();
//modification 4
function populateImages(){
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
var img = document.getElementsByTagName("img");
for(i=0; i<img.length ;i++){
	img[i].src = imagesArray[i];
}
}
populateImages();
//modification 5
function deleteLastCards(){
 var card = document.getElementsByClassName("col-md-4");
 for (i =6; i<card.length ; i++){
 	var x = card[i];
 	x.parentNode.removeChild(x);
 	i-=1

 }
 } 
deleteLastCards()
//modification 6
function changeCardsText(){
	 var text1 = document.getElementsByClassName("card-text")[0];
	 text1.innerHTML="L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
	 var text2 = document.getElementsByClassName("card-text")[1];
	 text2.innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
	 var text3 = document.getElementsByClassName("card-text")[1];
	 text3.innerHTML =  "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";

}
changeCardsText();

//modification 7
function changeViewButtons(){
	var bouton = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
   for( i = 0; i<bouton.length; i++){
  bouton[i].className="btn-success"
};
 }

changeViewButtons()

//modification 8 
function createDiv(){

    let rowCreate =document.querySelectorAll('.col-md-4')[2];
    let divElement = document.createElement('div');
    divElement.className = 'row';
    divElement.appendChild(rowCreate);
    let div =document.getElementsByClassName("row")[1];
    div.parentNode.appendChild(divElement);
}
createDiv();









