let showMenu = false;

//variable para dezplegar el menú

//función para dezplegar el menu
function showHideMenu() {
    const navElement = document.getElementById("nav");

    if (showMenu) {
        navElement.classList.remove("responsive");
        showMenu = false;
    } else {
        navElement.classList.add("responsive");
        showMenu = true;
    }
    
}
//sleccionar
function selection(){
    document.getElementById("nav").classList = "";
    showMenu = false;
}
// animaciones scroll
function effectSkills(){
    var ability = document.getElementById("skills");
    var distance_ability = window.innerHeight - skills.getBoundingClientRect().top;
    if (distance_ability >=300){
        let ability = document.getElementsByClassName("progreso");
        ability[0].classList.add("javascript");
        ability[1].classList.add("htmlcss");
        ability[2].classList.add("python");
        ability[3].classList.add("comunicacionasertiva");
        ability[4].classList.add("trabajoenequipo");
        ability[5].classList.add("resiliencia");
        ability[6].classList.add("sentidodeurgencia");
    } 

}
// función para detectar el scroll de la función de animaciones scroll
window.onscroll = function(){
    effectSkills()
}

// Abrir redes 

function openInNewWindow(url) {
    window.open(url, '_blank');
}
function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/10yn56xP7Q_8_esrgeATnuevD1rPRpUy4/view?usp=sharing';  // Ruta del archivo PDF
    link.download = 'cv-MIGUEL-RENDON.pdf';  // Nombre que tendrá el archivo descargado
    link.click();
  }