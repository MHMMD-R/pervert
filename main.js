const myev = document.getElementById("myev")
myev.addEventListener("mouseover" , (event) => {
event.target.style.backgroundColor = "yellow"
event.target.textContent = "n-no😱 "
event.target.style.backgroundImage = "url('')"

})
myev.addEventListener("click" , (event) =>{ 
event.target.style.backgroundImage = "url('images/badpng.png')"
event.target.textContent = ""
})
myev.addEventListener("mouseout" , (event) => {
event.target.textContent = "please dont 😨 "

    event.target.style.backgroundColor = "greenyellow"
event.target.style.backgroundImage = "url('')"
}
)