function remember(img) {
    localStorage.setItem('background', img);
}
function recall() {
    if (localStorage.getItem("background")) {
        console.log(localStorage.getItem("background"));
        document.body.style.backgroundImage = "url('" + localStorage.getItem("background") + "')";
    }
}
function setup() {
    for (let image of document.getElementsByTagName("img")) {
        image.onclick = function() {sillyBackground(image.src)};
    }
}
window.onload = () => {
    recall();
    setup();
}