class activo {
    constructor() {
        var item = document.getElementById("header");
        var items = item.getElementsByClassName("item");
        console.log(items.length , "hola");
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("hover", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
}