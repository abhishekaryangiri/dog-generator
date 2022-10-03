function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    // image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    image.src = "https://upload.wikimedia.org/wikipedia/en/4/45/DJ_Dog.gif";
    div.appendChild(image);
}

