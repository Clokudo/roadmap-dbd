var str="";
var archives=15;
var T01="RÉVEIL";
var T02="JUGEMENT";
var T03="ESCALADE";
var T04="CONVICTION";
var T05="DÉCHAÎNÉ";
var T06="DIVERGENCE";
var T07="ABANDONNÉ";
var T08="LIBÉRATION";
var T09="CRESCENDO";
var T10="SAW";
var T11="DÉVOTION";
var T12="DISCORDANCE";
var T13="MALVEILLANCE";
var T14="TRAHISON";
var T15="ASCENSION";
var nom=unescape(location.pathname);
var nom=nom.replace(/\/$/,"");
var nom=nom.replace(".html","");
var nom=nom.substring(nom.lastIndexOf("/")+1);
// Sélection de la div "levels"
const levelsDiv = document.querySelector('.levels');

// Sélection de tous les éléments "span" dans la div "levels"
const spans = levelsDiv.querySelectorAll('span');

// Boucle à travers chaque élément et affectation d'un ID séquentiel
for (let i = 0; i < spans.length; i++) {
  const id = `N${(i+1).toString().padStart(2, '0')}`;
  spans[i].setAttribute('id', id);
}
// Sélection de tous les éléments de la classe "level"
const levels = document.querySelectorAll('.level');

// Boucle à travers chaque élément et affectation d'un ID séquentiel
for (let i = 0; i < levels.length; i++) {
  const id = `LN${(i+1).toString().padStart(2, '0')}`;
  levels[i].setAttribute('id', id);
}
if(nom=="index"||nom=="roadmap-dbd")
{
var nom=archives;
}
for(var i=1;i<=archives;i++)
{
if(i<10)
{
i="0"+i;
}
str=str+"<a ";
if(i==nom)
{
str=str+"class=\"active\" ";
}
str=str+"href=\"";
if(i<archives)
{
str=str+i+".html\">"+i+"-"+this["T" + i]+"</a>";
}
else
{
str=str+"index.html\">"+i+"-"+this["T" + i]+"</a>";
}
}
document.getElementById("name").innerHTML = "TOME "+nom+" - "+this["T" + nom];
document.getElementById("menu").innerHTML = str;

const lines = document.querySelectorAll("line");

lines.forEach((line) => {
  line.addEventListener("click", () => {
    if (line.classList.contains("lblue")) {
      line.classList.remove("lblue");
      line.classList.add("lblack");
    } else if (line.classList.contains("lblack")) {
      line.classList.remove("lblack");
    } else {
      line.classList.add("lblue");
    }
  });
})
/*var elements = document.getElementsByClassName("info");
for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
}*/
if(nom==archives)
{
var N01=new Date("2023-05-01");
var N02=new Date("2023-05-01");
var N03=new Date("2023-05-01");
var N04=new Date("2023-05-01");
var CN01=document.getElementById("N01");
var CN02=document.getElementById("N02");
var CN03=document.getElementById("N03");
var CN04=document.getElementById("N04");
var LN01=document.getElementById("LN01");
var LN02=document.getElementById("LN02");
var LN03=document.getElementById("LN03");
var LN04=document.getElementById("LN04");
if(new Date()>=N01)
{
$("#N01").show();
CN01.classList.add("active");
if(LN01!=null)
{
LN01.classList.add("show");
}
}
if(new Date()>=N02)
{
$("#N02").show();
CN01.classList.remove("active");
if(LN01!=null)
{
LN01.classList.remove("show");
}
CN02.classList.add("active");
if(LN02!=null)
{
LN02.classList.add("show");
}
}
if(new Date()>=N03)
{
$("#N03").show();
CN02.classList.remove("active");
if(LN02!=null)
{
LN02.classList.remove("show");
}
CN03.classList.add("active");
if(LN03!=null)
{
LN03.classList.add("show");
}
}
if(new Date()>=N04)
{
$("#N04").show();
CN03.classList.remove("active");
if(LN03!=null)
{
LN03.classList.remove("show");
}
CN04.classList.add("active");
if(LN04!=null)
{
LN04.classList.add("show");
}
}
}
else
{
$("#N01").show();
$("#N02").show();
$("#N03").show();
$("#N04").show();
var CN04=document.getElementById("N04");
var LN04=document.getElementById("LN04");
CN04.classList.add("active");
if(LN04!=null)
{
LN04.classList.add("show");
}
}

function updateResult(activeSpan) {
  // Vérifier si un span actif a été trouvé
  if (activeSpan) {
    // Récupérer l'index du span actif
    const activeIndex = Array.from(levelSpans).indexOf(activeSpan);

    // Afficher le niveau correspondant au span actif et ajouter la classe "active" au span correspondant
    const levelToShow = document.querySelector(`.level:nth-child(${activeIndex + 1})`);
    levelToShow.classList.add('show');
    activeSpan.classList.add('active');

    // Sélectionner les éléments "node" dans le niveau actif
    const nodes = levelToShow.querySelectorAll('.node');
    
    // Initialisation des variables pour stocker les total de bloodpoints des nodes bleues et rouges
    let blueBloodpoints = 0;
    let redBloodpoints = 0;

    // Parcourir chaque élément pour récupérer le nombre de bloodpoints
    nodes.forEach(node => {
      // Vérifier si l'élément est une node bleue ou rouge
      if (node.classList.contains('bblue')) {
        // Si c'est une node bleue, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          blueBloodpoints += bloodpoints;
        }
      } else {
        // Si c'est une node rouge, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          redBloodpoints += bloodpoints;
        }
      }
    });

    // Mettre à jour le contenu de la div "result"
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<span style="background:blue">A valider (${blueBloodpoints} BP)</span> / <span style="background:red">A conserver (${redBloodpoints} BP)</span>`;
  }
}

// Récupérer tous les spans de la div "levels"
const levelSpans = document.querySelectorAll('.levels span');

// Ajouter un gestionnaire d'événement pour les clics sur les spans
levelSpans.forEach((span, index) => {
  span.addEventListener('click', () => {
    // Cacher tous les niveaux et retirer la classe "active" de tous les spans
    document.querySelectorAll('.level').forEach(level => level.classList.remove('show'));
    levelSpans.forEach(span => span.classList.remove('active'));

    // Afficher le niveau correspondant au span cliqué et ajouter la classe "active" au span correspondant
    const levelToShow = document.querySelector(`.level:nth-child(${index + 1})`);
    levelToShow.classList.add('show');
    span.classList.add('active');

    // Sélectionner les éléments "node" dans le niveau actif
    const nodes = levelToShow.querySelectorAll('.node');
    
    // Initialisation des variables pour stocker les total de bloodpoints des nodes bleues et rouges
    let blueBloodpoints = 0;
    let redBloodpoints = 0;

    // Parcourir chaque élément pour récupérer le nombre de bloodpoints
    nodes.forEach(node => {
      // Vérifier si l'élément est une node bleue ou rouge
      if (node.classList.contains('bblue')) {
        // Si c'est une node bleue, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          blueBloodpoints += bloodpoints;
        }
      } else {
        // Si c'est une node rouge, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          redBloodpoints += bloodpoints;
        }
      }
    });

    // Mettre à jour le contenu de la div "result"
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<span style="background:blue">A valider (${blueBloodpoints} BP)</span> / <span style="background:red">A conserver (${redBloodpoints} BP)</span>`;
  });
});

// Sélectionnez le span actif
const activeSpan = document.querySelector('.levels span.active');

// Initialiser le premier span de la div "levels" comme "active" lors du premier chargement de la page
if (!activeSpan) {
  levelSpans[0].classList.add('active');
  activeSpan = levelSpans[0];
}

// Appelez la fonction pour mettre à jour le contenu de la div result
updateResult(activeSpan);

