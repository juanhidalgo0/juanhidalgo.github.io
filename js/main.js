
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function show() {
    document.getElementById('navigator').classList.toggle('active');
}




function lights() {
    const lightsBtn = document.getElementById('lightmode-btn');
    lightsBtn.classList.toggle('on');
    if (lightsBtn.className == 'on'){
        document.getElementById('navigator').style.backgroundColor = "#eb4034";
        document.getElementById('_home').style.background = "#fff";
        document.getElementById('_sobreMi').style.background = "#ff5d52";
        document.getElementById('_contactame').style.background =  "radial-gradient(#fcc2ce,#fff)";
        document.getElementById('light-icon').style.color = "#212121";
        document.getElementById('light-icon2').style.color = "#212121"; 
        document.getElementById('btn-span-1').style.backgroundColor = "#212121";
        document.getElementById('btn-span-2').style.backgroundColor = "#212121";
        document.getElementById('btn-span-3').style.backgroundColor = "#212121";

        Array.from(document.getElementsByClassName("turnBlack"))
        .forEach((element) => element.style.color = "#212121");

    } else {
        document.getElementById('navigator').style.backgroundColor = "#000";
        document.getElementById('_home').style.backgroundColor = "#1a1a1a";
        document.getElementById('_sobreMi').style.backgroundColor =  "#000";
        document.getElementById('_contactame').style.background =  "radial-gradient(#333,#000)";
        document.getElementById('_contactame').style.backgroundColor =  "#1a1a1a";
        document.getElementById('light-icon').style.color = "#fff"; 
        document.getElementById('light-icon2').style.color = "#fff"; 
        document.getElementById('btn-span-1').style.backgroundColor = "#fff";
        document.getElementById('btn-span-2').style.backgroundColor = "#fff";
        document.getElementById('btn-span-3').style.backgroundColor = "#fff";


        Array.from(document.getElementsByClassName("turnBlack"))
        .forEach((element) => element.style.color = "#fff");

    }
}




function lng() {
    const languageBtn = document.getElementById('language-btn');
    languageBtn.classList.toggle('english');
    if (languageBtn.className == 'english') {

        document.getElementById('switch-text').innerHTML = "Cambiar<br>a Español";
        document.getElementById('switch-text2').innerHTML = "Cambiar<br>a Español";


        document.getElementById('homeText-1').innerHTML = "Hi,";
        document.getElementById('homeText-2').innerHTML = "im Juan Hidalgo";
        document.getElementById('homeText-3').innerHTML = "Web Developer";

        document.getElementById('sobreMi_text').innerHTML = "My name is Juan Hidalgo, I'm from Argentina and I'm a Web Developer, technology and music lover. Whenever I can I'm doing CSS and JS projects and trying to learn new technologies. I spend my free time expanding my knowledge in programming, and when I'm not programming, I like to play the bass guitar.";


        document.getElementById('li-1').innerHTML = "Home";
        document.getElementById('li-2').innerHTML = "About me";
        document.getElementById('li-3').innerHTML = "Contact";
        document.getElementById('li-4').innerHTML = "Foot";
        document.getElementById('li-1-1').innerHTML = "Home";
        document.getElementById('li-2-2').innerHTML = "About me";
        document.getElementById('li-3-3').innerHTML = "Contact";
        document.getElementById('li-4-4').innerHTML = "Foot";

        document.getElementById('contact-me').innerHTML = "Contact me!";
        document.getElementById('fonts-of-contact').innerHTML = "My principal sources of contact..."; 


    } else {
        document.getElementById('switch-text').innerHTML = "Switch<br>to English";
        document.getElementById('switch-text2').innerHTML = "Switch<br>to English";


        document.getElementById('homeText-1').innerHTML = "Hola,";
        document.getElementById('homeText-2').innerHTML = "soy Juan Hidalgo";
        document.getElementById('homeText-3').innerHTML = "Desarrollador Web";

        document.getElementById('sobreMi_text').innerHTML = "Mi nombre es Juan Hidalgo, soy de Argentina y soy Desarrollador Web, amante de la tecnología y la música. Siempre que puedo estoy haciendo proyectos en CSS o JS e intentando aprender nuevas tecnologías. Paso mi tiempo libre expandiendo mis conocimientos en programación, y cuando no estoy programando, me gusta tocar el Bajo";


        document.getElementById('li-1-1').innerHTML = "Inicio";
        document.getElementById('li-2-2').innerHTML = "Sobre mi";
        document.getElementById('li-3-3').innerHTML = "Contacto";
        document.getElementById('li-4-4').innerHTML = "Pie";
        document.getElementById('li-1').innerHTML = "Inicio";
        document.getElementById('li-2').innerHTML = "Sobre mi";
        document.getElementById('li-3').innerHTML = "Contacto";
        document.getElementById('li-4').innerHTML = "Pie";

        document.getElementById('contact-me').innerHTML = "¡Contactame!";
        document.getElementById('fonts-of-contact').innerHTML = "Mis principales fuentes de contacto..."; 


    }
}