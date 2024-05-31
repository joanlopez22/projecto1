document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    var categoria = document.getElementById("categoria").value;
    
    if (categoria === "matematicas") {
        window.location.href = "matematicas.html";
    } else if (categoria === "informatica") {
        window.location.href = "informatica.html";
    }
});
