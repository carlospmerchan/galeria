let pagina_Articulos = document.querySelector(".azul");
pagina_Articulos.addEventListener("click", e => {
    window.open("index2.html");
})
document.querySelectorAll(".articulos").forEach(item => {
    item.addEventListener("click", e => {
        window.open("index2.html");
    })
})