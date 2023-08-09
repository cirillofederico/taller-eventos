
function alertadiv() {
    alert("Hola! Soy el div");
}

document.addEventListener("DOMContentLoaded", function() {


    const element = document.getElementById("f2");
    element.addEventListener("click", function()
    {alertadiv()
    });


}


);  


