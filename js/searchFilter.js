
//Variables 
let searchBox = document.querySelector('#input');
let pictures = doucment.querySelectorAll('a');

searchBox.addEventListener("keypress", () => {
    for(let i = 0; i < pictures.length; i++) {
        if(pictures[i].data-caption.title.includes(searchBox.value));
            pictures[i].style.display = "inital";
    }
        else {
            pictures[i].style.display = 'none';
    }
});















