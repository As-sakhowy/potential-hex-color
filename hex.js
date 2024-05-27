const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color")
const btn = document.querySelector("#btn")

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener("click", function () {
    let strong = "#";
    for(let i = 0 ; i< 6;i++){
        strong += hex[getRandomNumber()];   
 }   
        color.textContent = strong;
        document.body.style.backgroundColor = strong;
});