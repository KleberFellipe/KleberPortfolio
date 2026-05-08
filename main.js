function copiarTexto(texto) {
    navigator.clipboard.writeText(texto);
    alert("Email copiado: " + texto);
}

document.querySelectorAll(".carousel").forEach(carousel => {

    const imagens = carousel.dataset.imagens.split(",");
    let index = 0;

    const img = carousel.querySelector("img");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");

    prev.addEventListener("click", () => {
        index = (index - 1 + imagens.length) % imagens.length;
        img.src = imagens[index].trim();
    });

    next.addEventListener("click", () => {
        index = (index + 1) % imagens.length;
        img.src = imagens[index].trim();
    });

});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {

        const id = link.getAttribute("href");
        const secao = document.querySelector(id);

        setTimeout(() => {
            secao.classList.add("destaque");

            setTimeout(() => {
                secao.classList.remove("destaque");
            }, 1000);

        }, 300); // esperascroll
    });
});

document.querySelectorAll(".carousel button").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 1.6) + "px";
        ripple.style.top = (e.clientY - rect.top - size / 1.6) + "px";

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 500);
    });

});