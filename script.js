const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const btn = document.getElementById('btn');
const showRaiting = document.getElementById('showRaiting');
const btnRaiting = document.querySelectorAll(".btnRaiting")

btn.addEventListener('click', function(){
    thanksContainer.classList.remove("hidden"); //para volver a ocultar un objeto se debe usar la propiedad add("hidden")
    mainContainer.style.display = "none"; //para volver a mostrar el container se debe usar la propedad mainContainer.style.display = "block";
});

btnRaiting.forEach((rate) => {
    rate.addEventListener("click", function(){
        showRaiting.innerHTML = rate.innerHTML;
    });
});