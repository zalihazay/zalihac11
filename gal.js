function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = element.src;
    caption.innerHTML = element.alt;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}
