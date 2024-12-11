const welcome = document.getElementById("welcome")

const data = JSON.parse(localStorage.getItem("user"))
let nombre = document.getElementById('welcome')
welcome.innerHTML = "Welcome " + `${data.nombre}`

function logOut(){
    const exit = confirm("Esta seguro de cerrar la sesión?")
    if(exit){
        window.location.replace("sesionStart.html")
    }
}
