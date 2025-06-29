
/* First Question */
const buttonOne = document.getElementById('button-one');
const one = document.getElementById('one');

const showTextOne = () => {
    if(one.style.display === 'none') {
        one.style.display = 'block';
        buttonOne.src = './assets/images/icon-minus.svg';
    } else {
        one.style.display = 'none';
        buttonOne.src = './assets/images/icon-plus.svg';
    }
}
buttonOne.addEventListener('click', showTextOne);    

/* Second Question */
const buttonTwo = document.getElementById('button-two');
const two = document.getElementById('two');

const showTextTwo = () => {
    if(two.style.display === 'none') {
        two.style.display = 'block';
        buttonTwo.src = './assets/images/icon-minus.svg';
    } else {
        two.style.display = 'none';
        buttonTwo.src = './assets/images/icon-plus.svg';
    }
}
buttonTwo.addEventListener('click', showTextTwo);  

/* Third Question */
const buttonThree = document.getElementById('button-three');
const three = document.getElementById('three');

const showTextThree = () => {
    if(three.style.display === 'none') {
        three.style.display = 'block';
        buttonThree.src = './assets/images/icon-minus.svg';
    } else {
        three.style.display = 'none';
        buttonThree.src = './assets/images/icon-plus.svg';
    }
}
buttonThree.addEventListener('click', showTextThree);  


/* Fourth Question */
const buttonFour = document.getElementById('button-four');
const four = document.getElementById('four');

const showTextFour = () => {
    if(four.style.display === 'none') {
        four.style.display = 'block';
        buttonFour.src = './assets/images/icon-minus.svg';
    } else {
        four.style.display = 'none';
        buttonFour.src = './assets/images/icon-plus.svg';
    }
}
buttonFour.addEventListener('click', showTextFour);  