function _load(params) {
    console.log("Az oldal betöltődött");

    document.getElementById("root").classList.add("loaded");

    function rootClicked() {
        console.log("A root id-jú div-re kattintottunk");
    };
    
    document.getElementById("root").addEventListener("click", rootClicked);
}

window.addEventListener("load", _load);