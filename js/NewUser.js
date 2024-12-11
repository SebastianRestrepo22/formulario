document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.querySelector("#tablaUsuarios tbody");
    const form = document.getElementById("register");
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];    

    // Función para renderizar los usuarios en la tabla
    const render = () => {
        tabla.innerHTML = usuarios.map((user, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.city}</td>
                <td>${user.email}</td>
                <td>${user.Number}</td>
                <td>${user.post}</td>
                <td>${user.Start_date}</td>
                <td>
                    <button onclick="editar(${i})" class="btn btn-warning btn-sm" style="background-color: rgba(255, 255, 0, 0.527)">edit</button>
                    <button onclick="eliminar(${i})" class="btn btn-danger btn-sm" style="background-color: rgba(255, 0, 0, 0.452);">Delete</button>
                    <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modaladd" onclick="consultUser(${i})" style="background-color: #198754ab;">Consultar</button>
                </td>
            </tr>`).join("");
    };

    // Función para guardar o editar un usuario
    document.getElementById("guardar").onclick = () => {
        const data = {
            name: document.getElementById("name").value,
            age: document.getElementById("Age").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
            Number: document.getElementById("Number").value,
            post: document.getElementById("post").value,
            Start_date: document.getElementById("Start_date").value
        };

        if (form.dataset.index) { // Si estamos editando un usuario
            usuarios[form.dataset.index] = data;
        } else { // Si estamos añadiendo un nuevo usuario
            usuarios.push(data);
        }

        // Guardar en localStorage y resetear formulario
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        form.reset();
        delete form.dataset.index; // Eliminar el índice de edición
        
        render();
    };

    // Función para cargar datos en el formulario para editar
    window.editar = (i) => {
        const user = usuarios[i];
        document.getElementById("name").value = user.name;
        document.getElementById("Age").value = user.age;
        document.getElementById("city").value = user.city;
        document.getElementById("email").value = user.email;
        document.getElementById("Number").value = user.Number;
        document.getElementById("post").value = user.post;
        document.getElementById("Start_date").value = user.Start_date;

        form.dataset.index = i; // Guardamos el índice para saber cuál editar
        const modal = new bootstrap.Modal(document.getElementById('modaladd')); // abre el modal
        modal.show();
        
    };

    // Función para eliminar un usuario
        window.eliminar = (i) => { 
            usuarios.splice(i, 1); 
            localStorage.setItem("usuarios", JSON.stringify(usuarios)); 
            render(); 
        };

        render();
});

//Consultar usuario

consultUser = (i) =>{
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const user = usuarios[i] //contar los indices del archivo JSON

    //Si user contiene algo.
    if(user){
        document.getElementById("name").value = `${user.name}`
        document.getElementById("Age").value = `${user.age}`
        document.getElementById("city").value = `${user.city}`
        document.getElementById("email").value = `${user.email}`
        document.getElementById("Number").value = `${user.Number}`
        document.getElementById("post").value = `${user.post}`
        document.getElementById("Start_date").value = `${user.Start_date}`
    }
}