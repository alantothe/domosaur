let span = document.querySelector(".mess-with-me")
let para = document.querySelector("p.mess-with-me")
let hide = document.querySelector("#hide-me-area")
let tri = document.querySelector("#triceratops")
let orangeFont = document.querySelector("s.mess-with-me")
let feather = document.querySelector("#feathers")
let button = document.querySelector("#toggle")
let row = document.querySelector("#row")
let biggify = document.querySelector("#biggify")

span.style.fontSize = "40px";
para.style.backgroundColor = "green";
hide.style.display = "none"
tri.style.width ="324px"



span.addEventListener('click', function(){
    span.style.color = 'orange'
})

tri.addEventListener('click', function(){
    tri.style.border = '2px solid red';
})

feather.addEventListener('click', function(){
    feather.style.opacity = "50%"
})

button.addEventListener('click', function(){
    row.style.backgroundColor = "yellow"

})

biggify.addEventListener('mouseenter', function(){
    biggify.style.width = "200px"
})



