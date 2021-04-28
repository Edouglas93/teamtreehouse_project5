
//Variables 
let searchBox = document.querySelector('#input').toLowerCase();
let pictures = docucment.querySelectorAll('a');

searchBox.addEventListener("keyup", (event) => {
    for(let i = 0; i < pictures.length; i++) {
        if(searchBox.value.length == 0){
            pictures[i].style.display = "inline";
        }
        else if (pictures[i].getAttribute("data-caption").includes(searchBox.value)) {
            pictures[i].style.display = "block";
        }
        else {
            pictures[i].style.display = 'none';
        }
    }
});















