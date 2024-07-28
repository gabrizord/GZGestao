document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente carregado e analisado");

    var modalButton = document.getElementById("modalButton");

    if (modalButton) {
        modalButton.addEventListener("click", function() {
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: false
            });
            myModal.show();
        });
    } else {
        console.log("Botão do modal não encontrado");
    }
});
