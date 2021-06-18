


preloader();
mainmenu();
gallery();
contactdata();
videoswitch()
/*Preloader*/
function preloader() {
    window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
        preloader.className += " hidden";
    });
}
/*lightbox*/
function lightboxsite() {
    const videolink = document.querySelectorAll('.videolist a');
    for (var i = 0; i < videolink.length; ++i) {
        let videosource = videolink[i].getAttribute("href");
        videolink[i].onclick = (e) => {
            e.preventDefault();
            basicLightbox.create(`
            <video controls data-id="2" autoplay preload>
                <source src="`+ videosource + `" type="video/webm">
            </video>
        `).show()
        }
    }

    const reaslink = document.querySelectorAll('.reaslist a');
    for (var i = 0; i < reaslink.length; ++i) {
        let imgsource = reaslink[i].getAttribute("href");
        reaslink[i].onclick = (e) => {
            e.preventDefault();
            basicLightbox.create(`
                <img class="loading" src="`+ imgsource + `" alt="digital painting by okiniko">  
        `).show()
        }
    }
}
/**slider**/
function sliders(){
const slider1 = new Siema();
document.querySelector('#reas .prev').addEventListener('click', () => slider1.prev());
document.querySelector('#reas .next').addEventListener('click', () => slider1.next());

const siema2 = document.querySelector('.siema2');
const slider2 = new Siema(
    {
        selector: siema2
      }
);
document.querySelector('#videos .prev').addEventListener('click', () => slider2.prev());
document.querySelector('#videos .next').addEventListener('click', () => slider2.next());
}
/*La navigation*/
function mainmenu() {
    const videobg = document.querySelector('video#bgvid');
    const logobutton = document.querySelector('#bglogo');
    const logoanim = document.querySelector('#traitlogo');
    const closebutton = document.querySelector('#closebutton');
    const fenetre = document.querySelectorAll('.formWrapper');
    const boutonsmenu = document.querySelectorAll('.iconicmenu .navbutton');
    closebutton.hidden = true;
    closebutton.style.transform = "scale(0.7)";


    /*on fait une boucle pour faire tourner toutes fenetres*/
    for (var i = 0; i < fenetre.length; ++i) {
        fenetre[i].classList.add('rotate');
    }
  /* si on clique sur le logo*/
logobutton.addEventListener('click',() => {
    videobg.classList.toggle('invisible');
    logobutton.style.mixBlendMode = "normal";
})
    /*on fait une boucle effectuer un changement sur tous les elements de boutons*/
    for (var i = 0; i < boutonsmenu.length; ++i) {
        boutonsmenu[i].addEventListener('click', function () {
            closebutton.hidden = false;
            videobg.style.opacity = "0";
            for (let i = 0; i < fenetre.length; ++i) {
                fenetre[i].classList.add('rotate');
                boutonsmenu[i].style.opacity = "0.7";
                boutonsmenu[i].style.transform = "scale(1)"; 
               
            }
            logoanim.style.animation = "none";
            logoanim.style.strokeDashoffset = 3450;
            this.style.opacity = "1";
            this.style.transform = "scale(1.2)";
            let section = this.getAttribute("href");
            let cible = document.querySelector(section);
            cible.classList.remove("rotate");
        })

    }


    /*fermer panneaux*/
    closebutton.addEventListener('click', function (e) {
        e.preventDefault();
        this.hidden = true;
        videobg.style.opacity = "1";
        for (var i = 0; i < fenetre.length; ++i) {
            fenetre[i].classList.add('rotate');
            boutonsmenu[i].style = null;
            
            logoanim.style.animation = "none";
            logoanim.style.strokeDashoffset = 0;
        }


    })
    return true;
}
/*formulaire*/
function contactdata() {


    const form = document.getElementsByTagName('form')[0];
    const bouton = document.getElementById('bouton');
    const alertbox = document.getElementById('alertbox');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formattedFormData = new FormData(form);
        postData(formattedFormData);

    });
    async function postData(formattedFormData) {
        const response = await fetch('contact.php', {
            method: 'POST',
            body: formattedFormData
        });
        const data = await response.text();
        alertbox.style.height = "100%";
        alertbox.style.opacity = "1";
        bouton.disabled = true;
        const bouton2 = document.createElement("button");
        bouton2.className = "closebutton";
        bouton2.innerText = "FERMER";
        alertbox.innerHTML = data;
        alertbox.appendChild(bouton2);
        bouton2.addEventListener("click", function () {
            alertbox.style.height = null;
            alertbox.style.opacity = null;
            form.reset();
            bouton.disabled = false;
        })
        return true;
    }
}
/* galerie*/
 function gallery(){
     fetch('gallery.php').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');

	// Get the image file
	var content = doc.querySelector('.siema');
    var galerie = document.querySelector('#reas .slider');
	galerie.append(content);
    sliders();
    lightboxsite();

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});}  


function videoswitch(){
    const logobutton = document.querySelector('#bglogo');
    const container = document.querySelector('.container');
    const videobg2 = document.querySelector('video#bgvid');
    const offbutton = document.querySelector('#offbutton');
    offbutton.addEventListener('click', function(){
        videobg2.classList.toggle('invisible');
        container.classList.toggle('nobgimage');
        logobutton.style.mixBlendMode = "normal";
    })
}