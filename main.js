const images = [
    "./img/pic-1.jpg",
    "./img/pic-2.jpg",
    "./img/pic-3.jpg",
    "./img/pic-4.jpg",
    "./img/pic-5.jpg",
    "./img/pic-6.jpg",
    "./img/pic-7.jpg",
    "./img/pic-8.jpg",
]

let index = 0;
let img = document.getElementById("img");
setInterval(() => {
    if(index === images.length){
        index = 0;
    }
    img.setAttribute("src",images[index]);
    index++

},3000)