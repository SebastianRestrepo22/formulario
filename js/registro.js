function RegistroUsuario(){
    const user = {
        nombre:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }

    localStorage.setItem('user', JSON.stringify(user))
    /* console.log(user) */
    alert("Usuario registrado")
    window.location.href = './sesionStart.html'
}