// console.log("First log");
// setTimeout(() => {
//     console.log("Second log");
// }, 3000);

// setTimeout(() => {
//     console.log("Third log");
// }, 4000);

///////////////////////////////////

// const one = () => {
//     console.log("Hello!")
// }

// const timer = setTimeout(one, 3000);
// clearTimeout(timer);




/////////////////////////////////////////////////////////////////

// const button = document.querySelector('.btn');
// const timer = () => {
//     setTimeout(() => {
//         alert('I Love JavaScript!');
//     }, 2000)
// }

// button.addEventListener('click', timer);

//////////////////////////////////////////////////////////////////////

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timer = null;

startBtn.addEventListener('click', () => {
    timer = setInterval(() => {
        console.log(`I love jS ${Math.random()}`)
    }, 3000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    console.log('Interval stopped!')
})