
//Variables 
let searchBox = document.querySelector('#input');
let pictures = document.querySelectorAll('a');

searchBox.addEventListener("keyup", (event) => {
    for(let i = 0; i < pictures.length; i++) {
        if(searchBox.value.length == 0){
            pictures[i].style.display = "inline";
        }
        else if (pictures[i].getAttribute("data-caption").toLowerCase().includes(searchBox.value.toLowerCase())) {
            pictures[i].style.display = "block";
        }
        else {
            pictures[i].style.display = 'none';
        }
    }
});















