const btncheck1 = document.getElementById("btncheck1");
const btncheck2 = document.getElementById("btncheck2");
const btncheck3 = document.getElementById("btncheck3");
const containerViewport = document.getElementById("containerViewport");
const cards = document.querySelectorAll(".card");

btncheck2.addEventListener("change", () => {
    cards.forEach((card) => {
        if (btncheck2.checked) {
            card.style.width = "100%";
            containerViewport.classList.add("container", "row", "h-auto");
            btncheck1.checked = false;
            btncheck3.checked = false;
        } else {
            card.style.width = "18rem";
            containerViewport.classList.remove("container", "row", "h-auto");
            btncheck1.checked = true;
        }
    });
});
btncheck3.addEventListener("change", () => {
    cards.forEach((card) => {
        if (btncheck3.checked) {
            card.style.display = "none";
            btncheck1.checked = false;
            btncheck2.checked = false;
        } else {
            card.style.display = "block";
            btncheck1.checked = true;
        }
    });
});
