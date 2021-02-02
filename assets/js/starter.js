const firstLetter = document.querySelectorAll('.title');


firstLetter[0].style.color = 'red';
firstLetter[1].style.color = 'green';

firstLetter.addEventListener('onFocus',mouseMove);

function mouseMove(){
    firstLetter.style.transition = '2px ease';
}



