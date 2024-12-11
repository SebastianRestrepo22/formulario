// Estos código son para poder que el formulario aparezca sobre la tabla

const modaladd = document.querySelector('#modaladd')

const openModal = () =>{
    modaladd.style.display = 'flex'
}

const close_modal = () => {
    modaladd.style.display = 'none'
}

modaladd.onclick = (event) => {
    if(event.target == modaladd){
        close_modal()
    }
}

