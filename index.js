const imgCont = document.querySelector('.div5');
// const img = document.querySelector('.img5')
window.addEventListener('scroll', () =>{
    const scrollTop = window.scrollY
    const imgTop = imgCont.offsetTop

    if (scrollTop >= imgTop){
        imgCont.classList.add('sticky')
    } else{
        imgCont.classList.remove('sticky')
    }
});


const contents = document.querySelectorAll('.content')
let currentIndex = 0

contents[currentIndex].classList.add('active')

setInterval(() =>{
    contents[currentIndex].classList.remove('active')
    currentIndex = (currentIndex + 1) % contents.length
    contents[currentIndex].classList.add('active')
}, 3000)

contents.forEach((content, index) =>{
    content.querySelector('.go_next').addEventListener('click', () =>{
        contents[currentIndex].classList.remove('active')
        currentIndex = (currentIndex + 1) % contents.length
        contents[currentIndex].classList.add('active')
    })
    content.querySelector('.go_prev').addEventListener('click', () =>{
        contents[currentIndex].classList.remove('active')
        currentIndex = (currentIndex - 1 + contents.length) % contents.length
        contents[currentIndex].classList.add('active')
    })
})

window.onload = function(){
    document.getElementById('techShow').classList.add('active');
}

document.getElementById('beauty_btn').addEventListener('mouseover', function(){
    document.getElementById('beautyShow').style.display = 'flex';
    document.getElementById('techShow').classList.remove('active');
});

// 

document.getElementById('beautyShow').addEventListener('mouseover', function(){
    document.getElementById('beautyShow').style.display = 'flex';
    document.getElementById('techShow').classList.remove('active');
});

document.getElementById('beauty_btn').addEventListener('mouseout', function(){
    document.getElementById('beautyShow').style.display = 'none';
    document.getElementById('techShow').classList.add('active');
});

// 
document.getElementById('beautyShow').addEventListener('mouseout', function(){
    document.getElementById('beautyShow').style.display = 'none';
    document.getElementById('techShow').classList.add('active');
});

document.querySelector('.showMenu').addEventListener('click', function(){
    document.querySelector('.sidebar').style.display = 'block';
    document.querySelector('.hideMenu').style.display = 'block';
    document.querySelector('.showMenu').style.display = 'none';
});

document.querySelector('.hideMenu').addEventListener('click', function(){
    document.querySelector('.sidebar').style.display = 'none';
    document.querySelector('.hideMenu').style.display = 'none';
    document.querySelector('.showMenu').style.display = 'block';
});

// const sbToggle = document.querySelector('.sidebar_items');
// const dropMenu = document.querySelector('.dropdown4');

// sbToggle.addEventListener('click', () =>{
//     dropMenu.classList.toggle('show')
// });


document.getElementById('to-top').addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});