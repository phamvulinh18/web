const nut = document.querySelector('.nut');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const btnyes = document.querySelector('.btn-yes');
const btnno = document.querySelector('.btn-no');

btnyes.addEventListener("click", () =>{
    btnyes.style.display = "none";
    btnno.style.display = "none";

    question.innerHTML = "Ý của anhh là chê em xấu đúng khônggg=)))";
    gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExajBnaGoxZWJ4djZ1bXE3NG16Z2o2cXNzYWszemJtYjd6YWUwb2k3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LJwzSoYEsiDzaOnRnO/giphy.gif"
});

btnno.addEventListener("mouseover", () =>{
    const abc = btnno.getBoundingClientRect();
    const maxX = window.innerWidth- abc.width;
    const maxY = window.innerHeight - abc.height;

const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);
    btnno.style.left = randomX + "px";
    btnno.style.top = randomY + "px";
});