function remember(img) {
    localStorage.setItem('background', img);
}
function recall() {
    if (localStorage.getItem("background")) {
        console.log(localStorage.getItem("background"));
        document.body.style.backgroundImage = 'url("https://almightymiau.gay/' + localStorage.getItem("background") + '")';
    }
}
window.onload = () => {
    recall();
}