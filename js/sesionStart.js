function start(){
    let email = document.getElementById("email").value
    let password = document.getElementById("Password").value

    // obtener datos del localStorage

    const data = JSON.parse(localStorage.getItem('user'))
    if(data.email === email && data.password === password){
        alert("Welcome")
        window.location.replace('./user.html')
    }else{
        alert("Usuario o contraseña invalidos")
    }
}