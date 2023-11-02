let imageArray = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];


let prevBtn = document.querySelector('.prevBtn');

let nextBtn = document.querySelector('.nextBtn');

let treat = document.querySelector('#treat');

let index= 1;

// nextBtn.addEventListener("click", () => {
//     treat.setAttribute("src", imageArray[index]);
//     index++;
//     if (index > imageArray.length-1) {
//         index = 0;
//     }
// });


// prevBtn.addEventListener('click', () => {
//     treat.setAttribute("src", imageArray[index]); index--;
//     if (index <0) {
//         index = imageArray.length-1;
//     }
// });

function nextClick() {
    treat.setAttribute("src", imageArray[index]);
    index++;
    if (index > imageArray.length - 1) {
        index = 0;
    }
}

function prevClick() {
    treat.setAttribute("src", imageArray[index]); index--;
    if (index <0) {
        index = imageArray.length-1;
    }
}
